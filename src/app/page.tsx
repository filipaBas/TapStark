"use client";

import Image from "next/image";
import * as motion from "framer-motion/client";
import ConnectButton from "./components/connectButton";

export default function Home() {

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 p-8 font-[var(--font-jura)]">

      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src="/images/star.png"
          alt="TapStark Logo"
          priority={true}
          width={100}
          height={100}
          className="mb-2"
        />
        <h1 className="text-3xl sm:text-5xl uppercase font-bold bg-gradient-to-r from-cyan-500 to-cyan-300 bg-clip-text text-transparent mb-12">
          Tapstark
        </h1>

      </motion.div>

      <motion.div
        className="flex flex-col items-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-3xl text-gray-100 mb-2">Play to win the</p>
        <p className="text-3xl font-bold text-gray-100 mb-2">Grand Prize Pool</p>
        <p className="text-6xl font-bold text-cyan-400 glow-pulse">$1,500.00</p>
      </motion.div>

      <ConnectButton layout="homepage" />

    </div>
  );
}
