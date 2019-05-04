import { withAmp } from 'next/amp'
import Head from 'next/head'
import Header from '../components/Header'

const Index = () => (
  <div>
    <Head>
      <title>nowonair.info は様々なメディアのオンエア情報を提供しています</title>
    </Head>
    <Header />
    <p>Hello World!!</p>
    <section>
      <h1>Nextjs と AMPページのテストをしています</h1>
      <p>Nextjs と AMPページのテストをしています</p>
    </section>
  </div>
)

export default withAmp(Index)
