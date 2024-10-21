import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { StarknetProvider } from "./context/starknet-provider";
import { WalletProvider } from "./context/walletContext";

const jura = localFont({
  src: "./fonts/Jura-VariableFont_wght.ttf",
  variable: "--font-jura",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "TapStark",
  description:
    "TapStark is a decentralized betting game on Starknet, strategically designed to increase network transactions while driving user adoption.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.variable} antialiased`}>
        <StarknetProvider>
          <WalletProvider>
            {children}
          </WalletProvider>
        </StarknetProvider>
      </body>
    </html>
  );
}
