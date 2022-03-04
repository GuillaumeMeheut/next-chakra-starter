import { forwardRef } from 'react'
import { Button } from '@chakra-ui/react'
import { Color, BorderSize, FontSize, ButtonSize } from '../../theme'

export const AppButton = forwardRef((props: any, ref: any) => {
  return (
    <Button
      ref={ref}
      color={Color.black}
      fontSize={FontSize.button}
      borderRadius={BorderSize.button}
      cursor="pointer"
      px={ButtonSize.mediumWidth}
      py={ButtonSize.mediumHeight}
      bg={Color.white}
      _hover={{}}
      _focus={{ outline: 'none' }}
      _active={{}}
      {...props}
    >
      {props.children}
    </Button>
  )
})
