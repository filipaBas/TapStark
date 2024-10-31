import { RpcProvider, Contract, Account } from "starknet";
import betting_game_Abi from "../../../contracts/betting_game_abi.json";

const provider = new RpcProvider({
  nodeUrl: `https://starknet-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
});

const ORIGIN_PK = process.env.ORIGIN_PRIVATE_KEY;
const ORIGIN_ADDRESS = "0x045bb4244a9ddaa42e6acfe58a98444190b03f7c047b202033bc32dd71389da6";
const BETTING_GAME_CONTRACT_ADDRESS = "0x044a14b61a797d551094d2c430b89391d7b83bd24bbd17ca0de39be9979e1510";

const account = new Account(provider, ORIGIN_ADDRESS, ORIGIN_PK);
/* const gameContract = new Contract(betting_game_Abi, BETTING_GAME_CONTRACT_ADDRESS, account); */

async function transferPrize(recipient) {
  console.log("Initiating prize to: ", recipient);

  try {
    const transferTx = await account.execute({
      contractAddress: BETTING_GAME_CONTRACT_ADDRESS,
      entrypoint: "transfer_prize",
      calldata: [recipient],
    });

    console.log("Transfer transaction submitted:", transferTx.transaction_hash);
    const receipt = await provider.waitForTransaction(transferTx.transaction_hash);

    if (receipt.execution_status !== "SUCCEEDED") {
      throw new Error(`Transfer failed with status: ${receipt.execution_status}`);
    }

    return transferTx;
  } catch (error) {
    console.error("Error transferring prize:", error);
    throw new Error("Failed to transfer prize.", error.message);
  }
}

const checkIfWinner = () => {
  return Math.random() < 0.7;
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { txHash } = req.query;
      const txReceipt = await provider.getTransactionReceipt(txHash);

      if (txReceipt.finality_status !== "ACCEPTED_ON_L1") {
        return res.status(202).json({
          status: "pending",
          message: "Transaction not yet confirmed on L1. Please try again later.",
        });
      }

      const txDetails = await provider.getTransaction(txHash);
      const recipientAddress = txDetails.sender_address;

      const isWinner = checkIfWinner();
      if (isWinner) {
        try {
          await transferPrize(recipientAddress);

          return res.json({
            status: "success",
            isWinner,
            message: "Congratulations! You won and the prize has been transferred.",
          });
        } catch (transferError) {
          console.error("Prize transfer failed:", transferError);

          return res.status(500).json({
            status: "error",
            isWinner,
            message: "You won, but prize transfer failed. Please contact support.",
            error: transferError.message,
          });
        }
      } else {
        return res.json({
          status: "success",
          isWinner,
          message: "Better luck next time!",
        });
      }
    } catch (error) {
      console.error("Error fetching transaction:", error);
      res.status(500).json({
        status: "error",
        message: "Unable to fetch transaction status. Please try again later.",
        error: error.message
      });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}