# TapStark - A Decentralized Betting Game on StarkNet

## Idea Summary

We are building an engaging betting game on StarkNet, where users participate by making microtransactions as betting attempts. Each attempt is triggered by tapping a button in the user interface (UI), representing a small transaction. With each bet, users accumulate points, which could later unlock rewards. The game features a lively mascot named Starky, who reacts as users play. In the future, we plan to launch the Starky meme coin and airdrop it to users based on their accumulated points.

Our main objectives are twofold: to create a fun, accessible betting experience and to contribute to StarkNet's network performance by increasing Transactions Per Second (TPS).

By making frequent microtransactions, users help elevate TPS metrics, showcasing StarkNet’s scalability. After each play, the game checks if the user has won the prize pool. If they lose, their transaction adds to the pool. If they win, the entire pool is transferred to their wallet, resetting the pool for the next round.

## Key Features

- **Microtransactions as Betting Attempts**: Users begin by funding their game wallet with a small amount of ETH. Each tap on the “Tap to Play” button initiates a microtransaction, registering as a betting entry.
- **Determination of Winners**: Every time a user taps to play, the game determines if it’s a winning attempt. If successful, the user claims the entire prize pool. If not, the funds from the attempt are added to the prize pool, increasing its value for future rounds.
- **Accumulation of Points**: With each betting entry, users earn points stored on the blockchain via a smart contract. In the future, we plan to launch the Starky meme coin, which will be airdropped to users based on the points they have accumulated.
- **Simple UI/UX**:
  1. **Initial Screen**: Displays a button to "Start Playing" and user tap to connect.
  2. **Game Screen**: After user connects, the UI changes to a "Tap to Play" button. The prize pool (pot) is also displayed, showing the total amount of ETH to be won.

## Technical Components

- **Smart Contract**: A smart contract will be deployed to manage and store user points, track microtransactions, and handle prize pool transfers to winners.
- **Transaction Listener (Node.js)**: A Node.js script will continuously listen for user transactions (taps) on the network. This script will determine whether a given transaction is a winning attempt and update the contract accordingly.
- **User Interface (React/Frontend)**: A simple web interface will guide users through the process of funding their wallet and participating in the betting game. The interface will integrate with the blockchain to update the prize pool and display user points.

## Future Potential

- **Launch of Starky Meme Coin**: Our mascot, Starky, will soon be represented by a dedicated meme coin. This Starky token will reward users who have accumulated points through gameplay.

- **Verifiably Fair Gameplay**: We plan to improve the verifiably fair mechanics of the game, ensuring that every outcome is transparent and provably random, increasing player trust and confidence in the system.

- **Open Verifiably Fair Engine**: Our goal is to develop a verifiably fair engine that not only powers this game but can also be used by other developers to ensure fairness in their own StarkNet-based games. This opens the door for broader use across the ecosystem, making our game a model for decentralized fairness.
