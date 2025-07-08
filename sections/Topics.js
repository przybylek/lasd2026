import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

const Topics = () => (
  <Container className="section p-4 bg-white my-5 rounded">
    <a className='target' id='topics'/>
    <h2 className="display-4 anchor mb-3">Topics of Interest</h2>
    <ListGroup  variant='flush' >
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> AI-driven Agile Software Development</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> LLMs for improved efficiency</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Tools for AI-assisted software development</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Agile teams in the post-COVID era</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Integrating DevOps, Agile, and CI/CD for end-to-end software development and deployment</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Scaling agile methods</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Distributed teams in Agile Software Development</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Lean and agility at the enterprise level</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Challenges of agile project management</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Balancing agility and discipline</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Collaborative games in Software Process Improvement</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Challenges of migrating to lean and agile methods</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Lean and agile coaching</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Agile gamification</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Measurement and metrics for agile projects, agile processes, and agile teams</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Innovation and creativity in agile teams</ListGroup.Item>
	<ListGroup.Item><i className="far fa-check-circle text-primary mr-3"/> Agile development for safety systems</ListGroup.Item>
    </ListGroup>
  </Container>
)

export default Topics

//	<ListGroup.Item><i className="fas fa-check-square"/> Agile teams in the post-COVID era</ListGroup.Item>


