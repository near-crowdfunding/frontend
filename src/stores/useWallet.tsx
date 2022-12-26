import create from "zustand";
import { Wallet } from "../utils/near";
import { Account } from "@near-wallet-selector/core";

interface WalletState {
  wallet: Wallet;
  isIntialized: boolean;
  initialize: () => void;
  get account(): Account;
  signIn: () => void;
  isSignedIn(): boolean;
  signOut: () => Promise<void>;
}

const useWallet = create<WalletState>()((set, get) => ({
  wallet: new Wallet(),
  isIntialized: false,
  initialize: () => {
    if (get().isIntialized) {
      return;
    }
    get()
      .wallet.startUp()
      .then(() => {
        set({ isIntialized: true });
      });
  },
  signOut: async () => {
    return get()
      .wallet.signOut()
      .then(() => {
        set({ isIntialized: false });
      });
  },
  get account() {
    return get().wallet.account;
  },
  isSignedIn() {
    return !!get().wallet.account.accountId;
  },
  signIn() {
    get().wallet.signIn();
  },
}));

export default useWallet;
