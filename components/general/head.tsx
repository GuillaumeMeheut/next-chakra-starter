import React from 'react'
import Head from 'next/head'

type Props = {
  title: string
}

export const AppHead = ({ title }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} key="title" />
    </Head>
  )
}
