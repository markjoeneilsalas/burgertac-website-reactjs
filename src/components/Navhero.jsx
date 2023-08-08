import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FaHamburger } from "react-icons/fa";
import { ImSpoonKnife } from "react-icons/im";
import { BiSolidBeer } from "react-icons/bi";
import { AiOutlineWifi } from "react-icons/ai";

function Navhero() {
  return (
    <Container className='background-image1' fluid>
        <nav className='justify-content-between'>
            <Row className='align-items-between p-5'>
                <Col>
                    <h1 className='logo-name'>TheBurgerTac</h1>
                </Col>
                <Col>
                    <ul className='d-flex gap-3 list-unstyled'>
                        <li>Home</li>
                        <li>Menu</li>
                        <li>Pricing</li>
                    </ul>
                </Col>
            </Row>
        </nav>

        <div>
            <Row className='align-items-center p-5 pt-0'>
                
                <Col>
                    <ul className='slogan-text d-block gap-3 list-unstyled'>
                        <li>The Beefy</li>
                        <li>Taste</li>
                        <li>You`ll Miss.</li>
                    </ul>
                </Col>
            </Row>
        </div>

        <div className='p-5 pt-0'>
            <Row>
                <Col>
                    <button className='btn-start pt-0'>View Menu</button>
                </Col>
            </Row>
        </div>

        <div className='p-5 pt-0'>
            <Row className='d-flex'>
                <Col md={1}>
                    <div className='card'>
                        <div className='card-body h1 text-center'>
                            <FaHamburger />
                        </div>
                    </div>
                </Col>

                <Col md={1}>
                    <div className='card'>
                        <div className='card-body h1'>
                            <ImSpoonKnife />
                        </div>
                    </div>
                </Col>

                <Col md={1}>
                    <div className='card'>
                        <div className='card-body h1'>
                            <BiSolidBeer />
                        </div>
                    </div>
                </Col>

                <Col md={1}>
                    <div className='card'>
                        <div className='card-body h1'>
                            <AiOutlineWifi />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>

    </Container>
  )
}

export default Navhero