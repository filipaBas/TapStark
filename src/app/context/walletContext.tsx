"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface WalletContextProps {
    isConnected: boolean;
    setIsConnected: (value: boolean) => void;
}

const WalletContext = createContext<WalletContextProps>({
    isConnected: false,
    setIsConnected: () => { },
});

export const WalletProvider = ({ children }: { children: ReactNode }) => {
    const [isConnected, setIsConnected] = useState(false);

    return (
        <WalletContext.Provider value={{ isConnected, setIsConnected }}>
            {children}
        </WalletContext.Provider>
    );
};

// Hook para usar o contexto
export const useWallet = () => useContext(WalletContext);
