import type { AppProps } from "next/app";
import "@/styles/globals.css";
import Layout from "@/components/layout/Layout";
import CustomHead from "@/components/layout/HeadTag";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CustomHead
        title={
          pageProps.title ? `Mark Vergara | ${pageProps.title}` : "Mark Vergara"
        }
      />
      <Component {...pageProps} />
    </Layout>
  );
}
