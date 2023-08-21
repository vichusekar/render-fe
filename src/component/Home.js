import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Home() {
    let navigate = useNavigate()
    return <>
        <div>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                         <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link> 
                        <Nav.Link onClick={() => navigate('/dashboard')}>Dashboard</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                       
                    </Nav>
                </Container>
                <Nav>
                    <Nav.Link onClick={() => navigate('/sign-up')} className='sign-up'>Sign Up</Nav.Link>
                    <Nav.Link onClick={() => navigate('/sign-in')}>
                        Sign In 
                    </Nav.Link>
                </Nav>
            </Navbar>
        </div>

    </>
}

export default Home