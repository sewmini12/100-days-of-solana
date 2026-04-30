import {
  createSolanaRpc,
  devnet,
  address
} from "@solana/kit";

// Connect to Solana Devnet
const rpc = createSolanaRpc(
  devnet("https://api.devnet.solana.com")
);

// 🔹 Replace this with your existing wallet address
const myAddress = address("7r9zYY35gdMvcqkZAYcUFPAEikMRcouFrgz1nLqr8wK4");

// Fetch balance
const { value: balance } = await rpc.getBalance(myAddress).send();

// Convert lamports → SOL
const balanceInSol = Number(balance) / 1_000_000_000;

// Output result
console.log("Wallet address:", myAddress);
console.log(`Balance: ${balanceInSol} SOL`);