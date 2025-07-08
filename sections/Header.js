import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'react-bootstrap/Image'

const Header = () => (
  <Jumbotron className='px-2 pt-5 mb-0' style={{backgroundColor: '#f0f0f5'}}>
    <a className='target' id='home'/>
    <Container className="px-0 py-1">
      <div className="row align-items-center">
        <div className="col-md-6">
	  <Image src="/Thessaloniki.jpg" alt='Thessaloniki' fluid />
        </div>
        <div className="col-md-6">
          <h1 className='h1 text-center anchor font-weight-bold'>LASD@<a className='u' href='https://www.sigapp.org/sac/sac2026/'>SAC'26</a></h1>
          <h2 className='text-center h3 py-3'>Track on <strong>Lean and Agile Software Development</strong></h2>
          <h3 className='text-center h4 pb-3'><small>at the 41st ACM/SIGAPP Symposium On Applied Computing</small></h3>
          <h4 className='text-center h5'>March 23-27, 2026</h4>
          <h4 className='text-center h5 pb-3'>Thessaloniki, Greece</h4>
        </div>
      </div>
    </Container>

  </Jumbotron>
)

export default Header