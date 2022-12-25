// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/Layout";
import { Toaster } from "react-hot-toast";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <NextUIProvider>
      <Layout>
        <>
          <Toaster />
          <Component {...pageProps} />
        </>
      </Layout>
    </NextUIProvider>
  );
};

export default trpc.withTRPC(MyApp);
