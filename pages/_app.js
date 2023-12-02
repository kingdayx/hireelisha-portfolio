import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
import Transition from "../components/Transition";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

export const metadata = {
  title: "Elishas Portfolio",
  description: "Hire Elisha",
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
