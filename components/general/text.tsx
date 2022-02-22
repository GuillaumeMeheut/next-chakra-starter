import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { Color, FontSize } from 'theme'

export function AppText({ children, ...props }: TextProps) {
  return (
    <Text
      color={Color.black}
      fontSize={FontSize.paragraph}
      fontWeight="400"
      {...props}
    >
      {children}
    </Text>
  )
}