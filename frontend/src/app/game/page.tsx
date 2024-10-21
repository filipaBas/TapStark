"use client";
import Image from "next/image";
import * as motion from "framer-motion/client";
import { useState } from "react";
import { useWallet } from "../context/walletContext";
import ConnectButton from "../components/connectButton";
import { AnimatePresence } from "framer-motion";
import AnimatedPoints from "../components/animatedPoints";
import MotionNumber from 'motion-number';

export default function GamePage() {
    const { isConnected } = useWallet();
    const [isClicked, setIsClicked] = useState(false);
    const [points, setPoints] = useState(0);
    const [showPoints, setShowPoints] = useState(false);
    const [addedPoints, setAddedPoints] = useState(0);

    const playSoundBetClick = () => {
        const audio = new Audio("/sounds/water-bleep.wav");
        audio.play();
    };

    const handleBetClick = () => {
        if (!isConnected) {
            alert("Connect your wallet to play.");
            return;
        }
        playSoundBetClick();
        setIsClicked(true);
        const randomPoints = Math.floor(Math.random() * 101);
        setAddedPoints(randomPoints);
        setPoints((prevPoints) => prevPoints + randomPoints);

        setShowPoints(true);
        setTimeout(() => {
            setShowPoints(false);
        }, 1000);

        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 p-2 font-[var(--font-jura)]">

            <header className="fixed top-0 left-0 w-full p-4 z-10 flex justify-between items-center">
                <h1 className="uppercase text-lg font-bold bg-gradient-to-r from-cyan-500 to-cyan-300 bg-clip-text text-transparent">
                    TapStark
                </h1>

                <ConnectButton layout="gamepage" />
            </header>

            {!isConnected && (
                <div className="flex flex-col mb-4 items-center justify-center border-2 border-cyan-500 py-2 px-8 rounded-md">
                    <p className="text-sm font-bold text-cyan-400">Connect your wallet to play</p>
                </div>
            )}

            <motion.div
                className="flex flex-col items-center gap-1 mb-12"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <p className="text-2xl text-gray-100 sm:text-3xl">Play to win the</p>
                <Image
                    src="/images/pote-de-ouro.png"
                    alt="Bet Button"
                    priority={true}
                    width={80}
                    height={80}
                    className="cursor-pointer sm:w-24 sm:h-24"
                />
                <p className="text-2xl font-bold text-gray-100 sm:text-3xl mb-2">Grand Prize Pool</p>
                <p className="text-4xl font-bold text-cyan-400 glow-pulse sm:text-6xl">$1,500.00</p>
            </motion.div>

            <motion.div
                className="flex flex-col items-center mb-8 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.button
                    onClick={handleBetClick}
                    initial={{ scale: 1 }}
                    animate={{ scale: isClicked ? 0.9 : 1 }}
                    transition={{ duration: 0.1 }}
                    className={`transition duration-200 button-glow ${isClicked ? 'button-glow-active' : ''}`}
                    style={{ borderRadius: '50%', padding: 0 }}
                >
                    <Image
                        src="/images/star.png"
                        alt="Bet Button"
                        priority={true}
                        width={160}
                        height={160}
                        className="cursor-pointer sm:w-48 sm:h-48"
                    />
                </motion.button>

                <AnimatePresence>
                    {showPoints && <AnimatedPoints points={addedPoints} />}
                </AnimatePresence>
            </motion.div>

            {isConnected && (
                <div className="mb-4">
                    <p className="text-md font-bold glow-pulse sm:text-xl">Tap to play</p>
                </div>
            )}

            <footer className="fixed bottom-0 w-full p-2 bg-gray-950 text-gray-200 flex justify-between items-center">
                <div className="flex flex-row items-center justify-items-start p-2 rounded min-w-40 border-2 border-cyan-400" >
                    <Image
                        src="/images/coin-points.svg"
                        alt="Points Icon"
                        width={30}
                        height={30}
                        className="mr-1"
                    />
                    <p className="text-lg font-bold mr-1">Points:</p>
                    <MotionNumber
                        className="font-bold text-xl"
                        value={points}
                        format={{ notation: 'standard' }}
                        locales="en-US"
                        transition={{
                            layout: { type: 'spring', duration: 0.7, bounce: 0 },
                            y: { type: 'spring', duration: 0.7, bounce: 0.25 },
                            opacity: { duration: 0.7, ease: 'easeOut', times: [0, 0.3] }
                        }}
                        style={{ lineHeight: 0.9 }}
                    />
                </div>

                <button className="opacity-50 flex flex-row bg-cyan-950 text-white p-4 rounded shadow hover:bg-cyan-800 transition duration-200 whitespace-nowrap">
                    <Image
                        src="/images/diamond.svg"
                        alt="Points Icon"
                        width={20}
                        height={20}
                        className="mr-1"
                    />
                    <p className="text-sm font-bold mr-2">Claim Rewards</p>
                </button>
            </footer>

            <style jsx>{`
                @media (max-height: 667px) {
                    .mb-20 {
                        margin-bottom: 12px;
                    }
                    .mb-10 {
                        margin-bottom: 8px;
                    }
                    .mb-4 {
                        margin-bottom: 4px;
                    }
                    .sm\\:text-3xl {
                        font-size: 2rem;
                    }
                    .sm\\:w-24, .sm\\:h-24 {
                        width: 80px;
                        height: 80px;
                    }
                    .sm\\:w-48, .sm\\:h-48 {
                        width: 160px;
                        height: 160px;
                    }
                }
                
            `}</style>
        </div>
    );
}
