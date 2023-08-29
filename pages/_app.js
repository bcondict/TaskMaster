import { ChakraProvider, CSSReset } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../src/theme"
import { AnimatePresence } from "framer-motion"

export default function MyApp({ Component, pageProps, router}) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset/>
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={false}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  );
}
