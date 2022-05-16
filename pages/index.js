import Head from 'next/head'
import Header from './header'
import Parallax from './components/parallax.jsx'

export default function Home() {
  return (
    <div>
      <Head>
        <title>YeaGram</title>
        
        <link rel="icon" href="/mylogo-white.ico" />
      </Head>
      <div className='Contain overflow-hidden'>
        <Header />
        <Parallax />




      </div>
    </div>
  )
}
