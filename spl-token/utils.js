import { Keypair, PublicKey } from '@solana/web3.js';

const secretKey = (
  await import('./wallet.json', {
    assert: { type: 'json' }
  })
).default;

export const payer = Keypair.fromSecretKey(new Uint8Array(secretKey));

const MINT_ADDRESS_58 = '3x2euvBYTxkzTJQhXjtY4DgxLLeSQ7XGWpfJR64k64Wn';
// For simplicity, the mint authority is the payer.
const MINT_AUTHORITY_58 = payer.publicKey.toBase58();
const TOKEN_ACCOUNT_58 = 'GzbgnoHaXPD9ZFgaPu9kSTmXAKZJrxosS9kqyiVzTRN3';

export const mintAddress = new PublicKey(MINT_ADDRESS_58);
export const mintAuthority = new PublicKey(MINT_AUTHORITY_58);
export const tokenAccount = new PublicKey(TOKEN_ACCOUNT_58);
