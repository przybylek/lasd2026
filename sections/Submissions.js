import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Submissions = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='submissions'/>
    <h2 className='display-4 anchor mb-3'>Submissions</h2>
    <p>
      Research papers and experience reports related to the above topics are solicited. Papers should be submitted in the PDF format using the ACM-SAC proceedings <a href="https://www.sigapp.org/sac/sac2026/authorkit.php">format</a> via the START submission system. <strong>Full papers</strong> are limited to <strong>8 pages</strong> with the option (at an extra charge) to add 2 more pages.</p>
      <Row className="justify-content-center my-3">
        <Button className="btn-lg" href='https://easychair.org/my/conference?conf=sac2026'>Submit a paper</Button>
      </Row>
    <p>
      Each submission will be reviewed by at least three program committee members. To facilitate the double-blind reviewing, authors are kindly requested to provide the paper WITHOUT any reference to any of the authors, including the authors' personal details, the acknowledgments section of the paper and any other reference that may disclose the authors' identity.
    </p>
    <p>
      Papers that receives positive reviews but are not accepted due to space limitation are invited for the poster session. The length of <strong>poster papers</strong> is <strong>2 pages</strong> (included in the registration) + 1 page (at an extra charge). 
    </p>
    <p>
      Upon paper acceptance, prospective authors must provide a camera-ready version which takes into account the review comments. The conference proceedings will be published by ACM and also available online through the ACM Digital Library.
    </p>
    <p>
      Paper registration is required, allowing the inclusion of the paper/poster in the conference proceedings. An author or a proxy must present the paper. This is a requirement for the paper/poster to be included in the ACM digital library. <span className='text-danger font-weight-bold'>Authors who cannot make on-site presentations due to travel or health restrictions may request to present their materials online.</span> No-presentation of registered papers and posters will result in excluding them from the ACM digital libray.
    </p>


  </Container>
)

export default Submissions


