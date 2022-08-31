import React, { ReactElement } from 'react'
import Head from 'next/head'
import Header from 'components/Header'
import Footer from 'components/Footer'

interface IProps {
  children: ReactElement
}

const Layout = ({ children }: IProps) => {
  return (
    <div className='bg-primary text-cyan-50'>
      <div className='max-w-[60vw] lg:max-w-[80vw] md:max-w-[90vw] sm:max-w-[95vw] m-auto'>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className='min-h-[100vh] px-4 py-6 sm:px-0'>
          { children }
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
