import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Product1 from '../assets/burgerproduct1.png'
import Product2 from '../assets/burgerproduct2.png'


function Content1() {
  return (
    <Container fluid>

        <Row className='background-image2 p-5 d-flex align-items-start'>
            <div className='d-flex'>
                <Col md={3}>
                    <img className='product1 d-block mx-auto' src={Product1} />
                    <h4 className='text-center pt-2'>OverBeef</h4>
                    <p className='text-center'>₱ 180 Pesos</p>
                </Col>
                <Col md={3}>
                    <img className='product1 d-block mx-auto' src={Product2} />
                    <h4 className='text-center pt-2'>OverCheese</h4>
                    <p className='text-center'>₱ 150 Pesos</p>
                </Col>
                <Col md={6}>
                    <h3 className='text-start pb-3'>BEST SELLER</h3>
                    <p className='text-start'>"Welcome to BurgetTac, where burgers meet perfection! We're dedicated to crafting the juiciest, most flavorful burgers you've ever tasted."</p>
                </Col>
            </div>
        </Row>
        
    </Container>
  )
}

export default Content1