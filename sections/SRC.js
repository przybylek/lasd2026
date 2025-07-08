import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'

const SRC = () => (
  <Container className="section p-4 bg-white my-5 rounded">
    <a className='target' id='src'/>
    <h2 className='display-4 anchor mb-3'>Student Research Competition (SRC)</h2>
    <p>
      Students are invited to submit research abstracts (maximum of 2 pages in ACM camera-ready format) following the instructions published at the SAC 2026 website.
    </p>
      <Row className="justify-content-center my-3">
        <Button className="btn-lg" href='https://easychair.org/my/conference?conf=sacsrc2026'>Submit a SRC abstract</Button>
      </Row>
  </Container>
)

export default SRC