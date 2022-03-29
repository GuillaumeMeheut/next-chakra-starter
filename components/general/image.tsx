import { Box, BoxProps } from '@chakra-ui/react'
import Image, { ImageProps } from 'next/image'

type Props = ImageProps & BoxProps

export const AppImage = ({ src, width, height, layout, ...props }: Props) => {
  return (
    <Box width={width} height={height} {...props}>
      <Image src={src} width={width} height={height} layout={layout} />
    </Box>
  )
}
