import { Box, Container } from '@chakra-ui/react'
import Head from 'next/head'

export default function MainLayout ({ children, router }) {
  return (
    <Box>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Yilunn Task Manager</title>
      </Head>

      <Container pt={15}>
        {children}
      </Container>
    </Box>
  )
}
