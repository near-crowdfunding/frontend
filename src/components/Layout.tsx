import React, { useEffect } from "react";
import useWallet from "../stores/useWallet";
import AppNavbar from "./AppNavbar";

type Props = { children: React.ReactElement };

function Layout({ children }: Props) {
  const { initialize: initializeWallet, isIntialized } = useWallet();

  useEffect(() => {
    initializeWallet();
  }, [initializeWallet, isIntialized]);

  return (
    <>
      <AppNavbar />

      {children}
    </>
  );
}

export default Layout;
