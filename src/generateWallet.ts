import { DirectSecp256k1HdWallet } from '@cosmjs/proto-signing';

interface Wallet {
  address: string;
  mnemonic: string;
}

export async function generateWallet() {
  // Generate a new wallet
  const wallet = await DirectSecp256k1HdWallet.generate(12);

  // Get the first account from the wallet
  const [account] = await wallet.getAccounts();

  return {
    address: account.address,
    mnemonic: wallet.mnemonic,
  }
}

export async function generateWallets(count: number): Promise<void> {
  const wallets: Wallet[] = [];
  for (let i = 0; i < count; i++) {
    wallets.push(await generateWallet())
  }
}

generateWallets(10)