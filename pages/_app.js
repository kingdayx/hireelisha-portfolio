import Layout from "../components/Layout";
import { useRouter } from "next/router";
import Transition from "../components/Transition";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
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
