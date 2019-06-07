import { withAmp } from 'next/amp'
import Head from 'next/head'
import Header from '../components/Header'


const About = () => ( 
  <div>
    <Head>
      <title>About</title>
    </Head>
    <Header />
    <p>This is the about page</p>
  </div>
)

export default withAmp(About)
