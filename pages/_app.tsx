// import Layout from "../components/layouts/main"
// import theme from "../src/theme"
// import { AnimatePresence } from "framer-motion"
import { Component } from "react";
import type { AppProps } from "next/app";
import styles from "./_app.css";

export default function MyApp({ Component, pageProps, router}: AppProps) {
  return (
    // <div>
    <div className={styles}>
      <Component {...pageProps} />
    </div>
  )
}
