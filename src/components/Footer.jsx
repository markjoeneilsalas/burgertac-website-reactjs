import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <Container fluid>
        <Row className='background-footer  text-center'>
            <div>
                <h2 className='text-center'>TheBurgerTac</h2>
            </div>
            <Row className='text-start p-5'>
                <Col className=''>
                    <h3>Our Services</h3>
                    <ul className='text-start'>
                        <li className='pl-5'>Pricing</li>
                        <li>Packing </li>
                        <li>Report a bug</li>
                        <li>Terms of Condition</li>
                    </ul>

                </Col>
                <Col>
                    <h3>Our Company</h3>
                    <ul className='text-start'>
                        <li>Reporting</li>
                        <li>Get in touch</li>
                        <li>Management</li>
                    </ul>
                </Col>
                <Col>
                    <h3>Our Address</h3>
                    <ul className='text-start'>
                        <li>Libertad</li>
                        <li>Tacloban City</li>
                        <li>Leyte</li>
                        <li>6500</li>
                    </ul>
                </Col>
            </Row>
            <p className='pt-3 text-center'>Develop and Created from scratch by Dxdev</p>
        </Row>
    </Container>
  )
}

export default Footer