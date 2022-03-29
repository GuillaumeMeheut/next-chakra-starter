import React from 'react'
import { Flex, Box } from '@chakra-ui/react'
import { Color, FontSize } from 'theme'
import Image from 'next/image'
import { AppLink, AppText, MotionBox } from '../'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const AppNavbar = ({}) => {
  const links = [
    { href: '/', text: 'Home' },
    { href: '/test', text: 'La société' },
  ]

  const router = useRouter()

  return (
    <Flex width={'100%'} py="15px" justify="center" align="center">
      {links.map((link, index) => {
        return (
          <>
            {index === Math.floor(links.length / 2) && (
              <Box mr="40px" zIndex="1">
                <Image src={'/assets/logo.svg'} width={178} height={170} />
              </Box>
            )}
            <Box key={link.text} position={'relative'}>
              <AppLink
                href={link.href}
                color={router.pathname === link.href ? Color.red : Color.black}
                fontSize={FontSize.navbar}
                mr={index === links.length - 1 ? '0px' : '40px'}
                zIndex="1"
                _hover={{
                  textDecoration: 'none',
                }}
              >
                {link.text}
              </AppLink>
              {router.pathname === link.href && (
                <MotionBox
                  layoutId="underline"
                  position="absolute"
                  bg="black"
                  width="calc(90% - 40px)"
                  height="1.5px"
                  bottom="0px"
                  zIndex="0"
                />
              )}
            </Box>
          </>
        )
      })}
      <Flex>
        <Box cursor={'pointer'}>
          <AppLink href="https://linkedin.com" isExternal>
            <Image src={'/assets/linkedin.svg'} width={21} height={21} />
          </AppLink>
        </Box>
        <Box cursor={'pointer'} mx="5px">
          <AppLink href="https://instagram.com" isExternal>
            <Image src={'/assets/insta.svg'} width={21} height={21} />
          </AppLink>
        </Box>
        <Box cursor={'pointer'}>
          <AppLink href="https://facebook.com" isExternal>
            <Image src={'/assets/facebook.svg'} width={21} height={21} />
          </AppLink>
        </Box>
      </Flex>
    </Flex>
  )
}
