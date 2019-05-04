import { withAmp } from 'next/amp'
import Header from '../components/Header'

const Index = () => (
  <div>
    <Header />
    <p>Hello World!!</p>
    <p>Nextjs と AMPページのテストをしています</p>
  </div>
)

export default withAmp(Index)
