import { withAmp } from 'next/amp'
import Head from 'next/head'
import Header from '../components/Header'

const About = () => ( 
  <div>
    <Head>
      <title>nowonair.info は様々なメディアのオンエア情報を提供しています</title>
    </Head>
    <Header />
    <p>This is the about page</p>
  </div>
)

export default withAmp(About)
