import Head from 'next/head'
import Header from './header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>YeaGram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='Contain'>
        <Header />
      </div>
    </div>
  )
}
