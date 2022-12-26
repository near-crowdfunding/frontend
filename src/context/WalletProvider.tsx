import { Loading } from "@nextui-org/react";
import React, { useEffect } from "react";
import useWallet from "../stores/useWallet";

type Props = { children: React.ReactElement };

function WalletProvider({ children }: Props) {
  const { initialize, isIntialized } = useWallet();

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <>
      {isIntialized ? (
        children
      ) : (
        <div className="flex h-screen items-center justify-center">
          <Loading />
        </div>
      )}
    </>
  );
}

export default WalletProvider;
