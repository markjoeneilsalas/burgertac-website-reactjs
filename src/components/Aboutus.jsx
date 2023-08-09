import React from 'react'
import Aboutimage from '../assets/aboutus.jpg'
import { Container, Col, Row } from 'react-bootstrap'


function Aboutus() {
  return (
    <Container fluid>

        <Row className='background-image3 d-flex align-items-center'>
            <div className='d-flex'>
                <Col className='p-5'>
                    <h3 className='text-start pb-2'>ABOUT US</h3>
                    <p className='text-start'>"Founded in 2023, TheBurgerTac was born out of a passion for creating burgers that redefine indulgence. Our journey began in a small kitchen, and today we stand proud as a hub for burger enthusiasts."</p>
                </Col>

                <Col>
                    <img className='aboutusimage d-block mx-auto' src={ Aboutimage } />
                </Col>
            </div>
        </Row>
    </Container>
  )
}

export default Aboutus