import Head from 'next/head'
import Header from './header'
import Parallax from './components/parallax.jsx'
import About from './about'
import MyProject from './myProject'

export default function Home() {
  return (
    <div>
      <Head>
        <title>YeaGram</title>
        
        <link rel="icon" href="/mylogo-white.ico" />
      </Head>
      <div className='Contain'>
        
        <div>
          <Header />
        </div>
        <div>
          <Parallax />
        </div>
        <div>          
          <About />
        </div>
        <div>          
          <MyProject />
        </div>
      </div>
    </div>
  )
}
