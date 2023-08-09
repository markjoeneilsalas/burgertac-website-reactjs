import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Orderimage from '../assets/orderonlineimage.jpg'

function Orderonline() {
  return (
    <Container fluid>

        <Row className='background-image4 d-flex align-items-center'>
            <div className='d-flex'>
                <Col className='p-5'>
                    <h3 className='text-start pb-2'>ORDER ONLINE</h3>
                    <p className='text-start'>Online Ordering System: "Satisfy your burger cravings from the comfort of your home! Browse our menu, customize your order, and enjoy contactless pickup or delivery." <br></br> <br></br> Customization Options: "Build your dream burger with our easy-to-use customization tool. Choose your patty, toppings, cheese, and sauces for a personalized delight."</p>
                </Col>

                <Col>
                    <img className='aboutusimage d-block mx-auto' src={ Orderimage } />
                </Col>
            </div>
        </Row>
    </Container>
  )
}

export default Orderonline