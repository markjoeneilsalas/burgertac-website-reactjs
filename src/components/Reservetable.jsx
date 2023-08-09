import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Reservetable() {
  return (
    <Container fluid>

        <Row className='background-image5 d-flex align-items-start'>
            <div className='d-flex'>
                <Col className='p-5'>
                    <h3 className='text-start pb-2'>WANT TO RESERVE A TABLE?</h3>
                    <p className='text-start'>Burger Selection: Classic Beef Burger: A timeless favorite, featuring a succulent beef patty, lettuce, tomato, and our secret special sauce. <br></br> <br></br> Veggie Delight Burger: A plant-based delight with a flavorful vegetable patty, avocado, and zesty salsa. Bacon Lover's Burger: For the bacon aficionados – a juicy patty topped with crispy bacon, cheddar cheese, and smoky BBQ sauce. <br></br> <br></br> Drinks: Classic Milkshakes: Creamy shakes in flavors like vanilla, chocolate, and strawberry, topped with whipped cream. Craft Beers: Explore our rotating selection of local craft beers that pair beautifully with our burgers.</p>
                </Col>

                <Col className='pt-5 pl-5'>
                    <button className='btn-start2 d-block mx-auto'>Contact Us Now</button>
                </Col>
            </div>
        </Row>
    </Container>
  )
}

export default Reservetable