const { RpcProvider } = require("starknet");
require('dotenv').config();

const provider = new RpcProvider({
  nodeUrl:
    `https://starknet-sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
});

const checkIfWinner = () => {
  return Math.random() < 0.7;
};

exports.playGame = async (req, res) => {
  const { txHash } = req.params;

  try {
    const txReceipt = await provider.getTransactionReceipt(txHash);

    if (txReceipt.finality_status === "ACCEPTED_ON_L1") {
      const isWinner = checkIfWinner();

      res.json({
        status: txReceipt.execution_status,
        isWinner,
        message: "Transaction successful, bet processed.",
      });
    } else {
      res.json({
        status: txReceipt.execution_status,
        message: "Transaction not yet confirmed. Please try again later.",
      });
    }
  } catch (error) {
    console.error("Error fetching transaction:", error);
    res.status(500).json({
      status: "error",
      message: "Unable to fetch transaction status. Please try again later.",
    });
  }
};
