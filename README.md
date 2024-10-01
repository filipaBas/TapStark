# TapStark - A Decentralized Lottery Game on StarkNet

## Idea Summary
We are building a simple lottery game on StarkNet where users participate by performing microtransactions as their lottery attempts. Each attempt is made by tapping a button in the user interface (UI), representing a small transaction. The goal is twofold: to create an engaging, low-barrier-to-entry lottery game and to help improve the network's Transactions Per Second (TPS).

By performing frequent microtransactions, users contribute to higher TPS metrics, showcasing the network’s scalability. Over time, users accumulate points for each lottery attempt, which may later be used to reward them with a future-minted token, depending on further development.

Each time the user plays, the game determines whether they have won the prize pool. If the user does not win, their transaction is added to the prize pool. If they win, the entire pool is transferred to their wallet, resetting the pool for the next round.

## Key Features
- **Microtransactions as Lottery Attempts**: Users fund their game wallet with a small amount of cryptocurrency. Each tap on the "Tap to Play" button executes a microtransaction and counts as a lottery entry.
  
- **Determination of Winners**: Every time a user taps to play, the game checks whether the attempt is a winning one. If it is, the user wins the entire prize pool. If not, the funds used for the play remain in the pool, increasing its size for future participants.
  
- **Accumulation of Points**: Every lottery entry awards users points, stored on the blockchain through smart contracts. These points could be exchanged for rewards or minted tokens in future versions of the game.
  
- **Simple UI/UX**:
  1. **Initial Screen**: Displays a button to "Top up to Start Playing" and a QR code with the game wallet address.
  2. **Game Screen**: After funding the wallet, the UI changes to a "Tap to Play" button. The prize pool (pot) is also displayed, showing the total amount of cryptocurrency to be won.

## Technical Components
- **Smart Contract**: A contract will be deployed to manage and store user points, as well as track microtransactions. It will also handle the logic of determining lottery winners based on predefined rules and transfer the prize pool to winners.
  
- **Transaction Listener (Node.js)**: A Node.js script will continuously listen for user transactions (taps) on the network. This script will determine whether a given transaction is a winning attempt and update the contract accordingly.
  
- **User Interface (React/Frontend)**: A simple web interface will guide users through the process of funding their wallet and participating in the lottery. The interface will integrate with the blockchain to update the prize pool and display user statistics.
