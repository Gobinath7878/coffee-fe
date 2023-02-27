import React from 'react'
import { Container,Row,Col } from 'reactstrap'
// import {NavLink} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { BASE_URL } from '../utils/config';
import '../styles/Coffee.css'
import {Card,CardBody,CardText,CardTitle,Button} from 'reactstrap'


const Coffee = () => {
   
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/coffees`);
        setCoffees(response.data.data);
      } catch (error) {
        // console.error(error);
      }
    };

    fetchCoffees();
  }, []);

  return (
    <>
    <section>
      <Container>
      <Row>
      <Col lg='12'className='mt-5 pt-4 '>
        
        <div className='d-flex justify-content-center gap-5 flex-wrap'>

        
      {coffees.map((coffees) => (
        // <div key={coffees._id} className='coffee-card'>
        //   <Link to={`/coffees/${coffees._id}`}>{coffees.title}</Link>
        //   <br />
        //   <img src={coffees.photo} alt="coffeeAltImg" className='rounded-3' />
        //   {/* <h6>Desc: {coffees.desc}</h6> */}
        //   <p>Price:$ {coffees.price}</p>       
        // </div>
        <Card
  style={{
    width: '18rem'
  }}
>
  <img
    alt="Sample"
    src={coffees.photo}
    className='rounded-1'
  />
  <CardBody key={coffees._id}>
    <CardTitle tag="h5">
      {coffees.title}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='text-warning'>$ {coffees.price}</span>
    </CardTitle>
    
    <CardText className='description'>
      {coffees.desc}
    </CardText>
    <Button className='bg-success border-0'>
    {/* <Link to={`/coffees/${coffees._id}`}>{coffees.title}</Link> */}
     <Link to='https://buy.stripe.com/test_7sIeWP0Qy8Ex9B6289' className='payment'>Order Now</Link>
    </Button>
  </CardBody>
</Card>
      ))}
    </div>
      </Col>
     </Row>
      </Container>
    </section>
    </>
  )
}

export default Coffee