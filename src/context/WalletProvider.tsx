import React, { useEffect } from "react";
import useWallet from "../stores/useWallet";

type Props = { children: React.ReactElement };

function WalletProvider({ children }: Props) {
  const { initialize } = useWallet();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return <>{children}</>;
}

export default WalletProvider;
