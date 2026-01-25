import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

const SessionHeader = ({ room, chair }) => (
    <div className="d-flex flex-wrap align-items-center gap-2 gap-md-3">
        {/* Sekcja Pokoju */}
        <div className="d-flex align-items-center">
            <span className="text-uppercase small opacity-75 me-2" style={{ letterSpacing: '0.5px', fontSize: '0.75rem' }}>
                Room:
            </span>
            <span className="fw-bold fs-6">
                {room}
            </span>
        </div>

        {/* Separator pionowy (widoczny od md w górę) */}
        <div className="d-none d-md-block border-start border-dark opacity-25 mx-1" style={{ height: '1.2em' }}></div>

        {/* Sekcja Przewodniczącego */}
        <div className="d-flex align-items-center">
            <span className="text-uppercase small opacity-75 me-2" style={{ letterSpacing: '0.5px', fontSize: '0.75rem' }}>
                Chair:
            </span>
            <span className="fw-bold fst-italic">
                {chair}
            </span>
        </div>
    </div>
);

const Program = () => (
    <Container className="bg-white section p-4 my-5 rounded shadow-sm">
        <a className='target' id='program' />
        <h2 className='display-4 anchor mb-4'>Program</h2>

        <Table responsive hover bordered className="mt-4 align-middle">
            <tbody>
                {/* --- Dzień 1 --- */}
                <tr className='table-primary border-primary'>
                    <th className="text-nowrap text-center py-3" style={{ width: '15%' }}>Tue., March 24</th>
                    <th className="py-3">
                        <SessionHeader room="Orion" chair="Aleksander Jarzebowicz" />
                    </th>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>16:00 - 16:05</td>
                    <td>
                        <div className="fw-bold">Track opening</div>
                        <div className="text-muted small fst-italic">Adam Przybylek</div>
                    </td>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>16:05 - 16:25</td>
                    <td>
                        <div className="fw-bold">Onboarding newcomers in Large-scale Agile projects</div>
                        <div className="text-muted small fst-italic">Pavithra Herath, Muhammad Ovais Ahmad and Tomas Gustavsson</div>
                    </td>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>16:25 - 16:45</td>
                    <td>
                        <div className="fw-bold">Combining Textual Embeddings and Graph Neural Networks for Agile Software Effort Estimation</div>
                        <div className="text-muted small fst-italic">Carlos Bitencourt, Marcelo Augusto Santos Turine, Vanessa Araujo Borges and Bruno Nogueira</div>
                    </td>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>16:45 - 17:05</td>
                    <td>
                        <div className="fw-bold">Supporting Agility at Scale Through an Organization-wide Software Engineering Community of Practice: Insights from a Large Software Development Organization</div>
                        <div className="text-muted small fst-italic">Franziska Tobisch, Klaus Häuptle and Florian Matthes</div>
                    </td>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>17:05 - 17:25</td>
                    <td>
                        <div className="fw-bold">A Framework of Critical Success Factors for Agile Software Development</div>
                        <div className="text-muted small fst-italic">Ridewaan Hanslo and Maureen Tanner</div>
                    </td>
                </tr>

                {/* --- Separator --- */}
                <tr style={{ height: '20px', border: 'none' }}>
                    <td colSpan={2} className="bg-light border-0"></td>
                </tr>

                {/* --- Dzień 2 --- */}
                <tr className='table-primary border-primary'>
                    <th className="text-nowrap text-center py-3">Wed., March 25</th>
                    <th className="py-3">
                        <SessionHeader room="Lobby" chair="Ya-Shu Chen" />
                    </th>
                </tr>
                
                <tr>
                    <td className='text-nowrap fw-bold text-center text-secondary'>15:00 - 17:00</td>
                    <td>
                        <div className="fw-bold">Leveraging Automated Risk Identification in Scrum with a k-NN Recommender System</div>
                        <div className="text-muted small fst-italic">Ademar França De Sousa Neto, Danyllo Albuquerque, Emanuel Filho, Felipe Ramos, Luiz Antônio, Salatiel Dantas Silva, Ramon Santos, Mirko Perkusich, Hyggo Almeida and Angelo Perkusich</div>
                    </td>
                </tr>

            </tbody>
        </Table>
    </Container>
)

export default Program;