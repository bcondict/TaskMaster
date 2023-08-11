import { ChakraProvider } from "@chakra-ui/react"
import Layout from "../components/layouts/main"
import theme from "../src/theme"

export default function MyApp({ Component, pageProps, router}) {
  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </ChakraProvider>
  );
}
