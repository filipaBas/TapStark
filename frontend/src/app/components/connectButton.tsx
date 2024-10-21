import { useCallback, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as motion from "framer-motion/client";
import { useConnect, useAccount } from "@starknet-react/core";
import { useWallet } from "../context/walletContext";

interface ConnectButtonProps {
    layout: "homepage" | "gamepage";
}

export default function ConnectButton({ layout }: ConnectButtonProps) {
    const router = useRouter();
    const { connect, connectors } = useConnect();
    const { account } = useAccount();
    const { setIsConnected } = useWallet();

    const handleConnectClick = useCallback(async () => {
        try {
            const braavosConnector = connectors.find(c => c.id === "braavos");
            if (braavosConnector) {
                await connect({ connector: braavosConnector });
            }
        } catch (e) {
            console.error("Failed to connect:", e);
        }
    }, [connect, connectors]);

    useEffect(() => {
        if (account) {
            const connectSound = new Audio("/sounds/robot-click.wav");
            connectSound.play();
            setIsConnected(true);
            router.push("/game");
        }
    }, [account, setIsConnected, router]);

    const buttonClass = layout === "gamepage"
        ? "uppercase bg-gray-900 text-xs text-white font-bold py-1 px-4 rounded-md border-2 border-cyan-500 shadow-md hover:bg-gray-950 transition-all text-lg flex items-center"
        : "bg-gray-900 text-white font-bold py-3 px-8 rounded-lg border-2 border-cyan-500 shadow-md hover:bg-gray-950 transition-all text-lg flex items-center";

    return (
        <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <button
                className={buttonClass}
                onClick={handleConnectClick}
                disabled={!!account}
            >
                <Image
                    src="/images/wallet.svg"
                    alt="Wallet Icon"
                    width={24}
                    height={24}
                    className="mr-2"
                />
                {account ? "Connected" : (layout === "gamepage" ? "Connect Wallet" : "Connect to Play")}
            </button>
        </motion.div>
    );
}
