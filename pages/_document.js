// import theme from "../src/theme"
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    // <Html lang="en">
    //   <Head/ >
    //   <body>
    //     <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    //     <Main/>
    //     <NextScript/>
    //   </body>
    // </Html>
    <Html lang="en">
      <Head/>
      <body>
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}
