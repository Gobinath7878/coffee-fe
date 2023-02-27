import React from 'react'
import '../styles/Home.css'
import Coffee from './Coffee'
import { Container,Row,Col } from 'reactstrap'
import HomeImg from '../assets/coffeebg.png'

const Home = () => {
  return (
    <div>
      <section className='pb-0'>
        <Container>
          <Row>
            <Col lg='6' className='mt-5 pt-5 home-content'>
              <h1 className='fw-bold pb-2'>Coffee<span className='text-warning fw-bold'>Go</span></h1>             
              <p className='home-text'>Welcome to our coffee shop website, where we believe that every cup of coffee tells a story. From the careful selection of our beans to the expert craftsmanship of our baristas, we are committed to providing you with a delicious and memorable coffee experience.</p>
              <h2 className='fw-bold pt-2'>"Every cup tells a story: <br />
              <span className='text-warning fw-bold home-slogan'>Brewed with love at our coffee shop</span>"</h2>
            </Col>
            <Col lg='6' className='mt-5 pt-5 mb-5'>
              <img src={HomeImg} alt="HomeImg" className='homeimg'/>
            </Col>
          </Row>
        </Container>
      </section>
      <h2 className='text-center bg-warning p-5 fw-bold'> <span className='bg-light p-2 rounded-2'>Coffee List</span></h2>
    <Coffee/>
    </div>
  )
}

export default Home