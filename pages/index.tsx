import { Box } from '@chakra-ui/react'
import { AppLayout } from 'components'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <AppLayout title="Titre">
      <Box>Titre</Box>
    </AppLayout>
  )
}

export default Home
