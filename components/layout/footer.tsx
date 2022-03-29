import { Flex, Link } from '@chakra-ui/react'
import { Color } from 'theme'
import { AppLink, AppText } from '../general'

export const AppFooter = () => {
  return (
    <Flex
      as="footer"
      bgColor={Color.white}
      align="center"
      justify={'center'}
      py="10px"
      mt="50px"
    >
      <AppLink
        href="https://google.fr"
        color={Color.black}
        fontSize="12px"
        isExternal
      >
        CGV
      </AppLink>
    </Flex>
  )
}
