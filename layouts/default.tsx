import Head from 'next/head'
import { FC } from 'react'
import Footer from '~/components/layout/Footer'
import Navbar from '~/components/layout/Navbar'

const DefaultLayout: FC<{ children: any }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="pt-12 grow">{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default DefaultLayout
