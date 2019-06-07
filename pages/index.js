import { withAmp } from 'next/amp'
import styled from 'styled-components'
import Head from 'next/head'
import Header from '../components/Header'

const MainText = styled.div`
  color: red;
`

const Index = () => (
  <div>
    <Head>
      <title>TEST</title>
    </Head>
    <Header />
    <p>Hello World!!</p>
    <section>
      <h1>TEST</h1>
      <MainText>Nextjs と AMPページのテストをしています</MainText>
    </section>
  </div>
)

export default withAmp(Index)
