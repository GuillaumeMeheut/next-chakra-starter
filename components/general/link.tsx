import React from 'react'
import { Link, LinkProps } from '@chakra-ui/react'
import { Color, FontSize } from 'theme'

export const AppLink = ({ children, ...props }: LinkProps) => {
  return (
    <Link
      color={Color.black}
      fontSize={FontSize.paragraph}
      fontWeight="400"
      {...props}
    >
      {children}
    </Link>
  )
}
