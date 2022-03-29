import { Grid, Flex } from '@chakra-ui/react'
import { AppHead } from 'components'
import { AppFooter, AppNavbar } from '.'

export function AppLayout({ title, children }) {
  return (
    <>
      <AppHead title={title} />
      <Grid
        width="100%"
        gridTemplateRows={'auto 1fr auto'}
        minHeight="100vh"
        alignItems={'flex-start'}
      >
        <AppNavbar />
        <Flex direction="column" justify={'center'} align="center">
          {children}
        </Flex>
        <AppFooter />
      </Grid>
    </>
  )
}
