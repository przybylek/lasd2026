import Container from 'react-bootstrap/Container'
import PeopleList from '../components/PeopleList'

const Commitee = ({ people }) => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='committee'/>
    <h2 className='display-4 anchor mb-3'>Program Commitee</h2>
    <PeopleList people={people} />
  </Container>
)

/*
const Commitee = () => (
  <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='committee'/>
    <h2 className='display-4 anchor'>Program Commitee</h2>
    <h3>TBA...</h3>
  </Container>
)
*/

export default Commitee
