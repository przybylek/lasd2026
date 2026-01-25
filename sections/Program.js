import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import React from 'react'
import Clock from 'react-live-clock'

/*
const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
      <a className='target' id='program'/>
      <h2 className='display-4 anchor mb-3'>Program</h2>
      <p>
          TBA...
      </p>
    </Container>
)
*/


const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded">
    <a className='target' id='program'/>
    <h2 className='display-4 anchor mb-3'>Program</h2>



    <Table bordered className="mt-5">
      <tbody>	

        <tr className='text-center table-primary'><th>Tue., March 24</th><th>Room: Orion; chair: <em>Aleksander Jarzebowicz</em></th></tr>
        <tr><td className='text-nowrap'>16:00 - 16:05</td><td>Track opening (<em>Adam Przybylek</em>)</td></tr>
        <tr><td className='text-nowrap'>16:05 - 16:25</td><td>Onboarding newcomers in Large-scale Agile projects (<em>Pavithra Herath, Muhammad Ovais Ahmad and Tomas Gustavsson</em>)</td></tr>
        <tr><td className='text-nowrap'>16:25 - 16:45</td><td>Combining Textual Embeddings and Graph Neural Networks for Agile Software Effort Estimation (<em>Carlos Bitencourt, Marcelo Augusto Santos Turine, Vanessa Araujo Borges and Bruno Nogueira</em>)</td></tr>
        <tr><td className='text-nowrap'>16:45 - 17:05</td><td>Supporting Agility at Scale Through an Organization-wide Software Engineering Community of Practice: Insights from a Large Software Development Organization (<em>Franziska Tobisch, Klaus Häuptle and Florian Matthes</em>)</td></tr>
        <tr><td className='text-nowrap'>17:05 - 17:25</td><td>A Framework of Critical Success Factors for Agile Software Development (<em>Ridewaan Hanslo and Maureen Tanner</em>)</td></tr>

        <tr><th className='text-center table-secondary' colSpan={2}></th></tr>
        <tr className='text-center table-primary'><th>Wed., March 25</th><th>Room: Lobby; chair: <em>Ya-Shu Chen</em></th></tr>
        <tr><td className='text-nowrap'>15:00 - 17:00</td><td>Leveraging Automated Risk Identification in Scrum with a k-NN Recommender System (<em>Ademar França De Sousa Neto, Danyllo Albuquerque, Emanuel Filho, Felipe Ramos, Luiz Antônio, Salatiel Dantas Silva, Ramon Santos, Mirko Perkusich, Hyggo Almeida and Angelo Perkusich</em>)</td></tr>

      </tbody>
    </Table>
  </Container>
)


export default Program


//    <Row className="justify-content-center my-5">
//      <Col xs lg="1"> 
//      </Col>
//
//      <Col xs lg="2"> 
//        <Image fluid src='/LNBIP_LASD22.jpg' alt='LNBIP_LASD22'/>
//      </Col>
//      <Col>
//  <h4>Lean and Agile Software Development</h4>
//  <h5>6th International Conference, LASD 2022, Virtual Event, January 22, 2022, Proceedings</h5>
//  <h4><a href="https://link.springer.com/book/10.1007/978-3-030-94238-0">LNBIP, volume 438</a></h4>          
//      <p className='mt-4'>Time zone of the conference: GMT+1 (Central European Standard Time)</p>
//      <p>Current Time:
//         <Clock 
//           format={'HH:mm:ss'}
//           ticking={true}
//           className="mx-2" />
//       </p>
//      </Col>
//     <Col xs lg="1"> 
//      </Col>
//    </Row> 


  
