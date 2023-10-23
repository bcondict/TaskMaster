// import Layout from "../components/layouts/main"
// import theme from "../src/theme"
// import { AnimatePresence } from "framer-motion"
import * as styles from "./_app.css"

export default function MyApp({ Component, pageProps, router}) {
  return (
    <div className={styles}>
      <Component {...pageProps} />
    </div>
  );
}
