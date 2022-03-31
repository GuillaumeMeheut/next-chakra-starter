import { forwardRef } from 'react'
import { Input, InputProps } from '@chakra-ui/react'
import { Color, FontSize, InputSize } from 'theme'

export const AppInput = (props: InputProps) => {
  const { placeholder, type } = props
  return (
    <Input
      placeholder={placeholder}
      type={type}
      backgroundColor={'transparent'}
      color={Color.black}
      fontFamily="Roboto"
      fontWeight="500"
      fontSize={FontSize.input}
      width={InputSize.mediumWidth}
      height={InputSize.mediumHeight}
      borderRadius="0px"
      _focus={{}}
      _active={{}}
      _placeholder={{ color: 'black' }}
      {...props}
    />
  )
}
