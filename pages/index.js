import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from 'react-bootstrap/Container'
import Header from '../sections/Header'
import About from '../sections/About'
import Motivation from '../sections/Motivation'
import PastConferences from '../sections/PastConferences'
import Topics from '../sections/Topics'
import Submissions from '../sections/Submissions'
import ImportantDates from '../sections/ImportantDates'
import Chairs from '../sections/Chairs'
import Committee from '../sections/Committee'
import Program from '../sections/Program'
import Navigation from '../components/Navigation'

import { readCsv } from '../utils'

export default function Home({ chairs, committee, reviewers }) {
  return (
    <Container fluid className='px-0' style={{backgroundColor: '#f0f0f5'}}>
      <Head>
        <title>LASD 2026</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous"></link>
      </Head>

      <Navigation />

      <Header />
      <About />
      <Motivation />
      <Topics />
      <Submissions />
      <ImportantDates />
      <Program />
      <Chairs people={chairs} />
      <Committee people={committee} />
      <PastConferences />
    </Container>
  )
}

export async function getStaticProps() {
  return {
    props: {
      chairs: readCsv('./data/chairs.csv'),
      committee: readCsv('./data/committee.csv').slice(1),
    }
  }
}
