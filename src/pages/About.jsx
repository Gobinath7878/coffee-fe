import React from "react";
import "../styles/About.css";
import { Container, Row, Col } from "reactstrap";

const About = () => {
  return (
    <>
      <section className="pt-3">
        <Container className="pt-3">
          <Row>
            <Col lg="8" className="pt-4">
              <div className="about-container pt-3">
                <img
                  src="https://img.freepik.com/free-photo/top-view-bowls-with-coffee-beans-powder_23-2148937321.jpg?w=740&t=st=1677483845~exp=1677484445~hmac=8c62f8cd2028e7c133bc5fa186c5d741a3f99ce3294a527508a6be5f549639d3"
                  alt="Our Team"
                  className="team-image"
                />
                <p>
                  Welcome to our <span className="highlight">CoffeeGo </span>{" "}
                  website ! We are excited to share with you the story behind
                  our establishment and the delicious offerings we have
                  available. Our coffee shop was founded with a simple mission:
                  to provide high-quality coffee and a welcoming atmosphere for
                  all. We believe that coffee has the power to bring people
                  together and brighten their day, and we strive to create an
                  environment where our customers feel at home. Our beans are
                  carefully selected from the best coffee-growing regions around
                  the world, and our skilled baristas take pride in crafting
                  each cup with care. Whether you prefer a classic espresso or a
                  frothy latte, we have something to satisfy every taste. In
                  addition to our coffee, we also offer a variety of baked goods
                  and light fare to enjoy with your beverage. From flaky
                  croissants to freshly baked muffins, we have a selection of
                  treats to satisfy your sweet tooth. At our coffee shop, we
                  believe in giving back to the community that supports us. We
                  partner with local charities and organizations to donate a
                  portion of our profits to causes that are important to us and
                  our customers. We invite you to visit our cozy coffee shop and
                  experience the warmth and community that we have to offer.
                  Whether you're looking for a quiet place to work or a lively
                  spot to catch up with friends, we have a space for you. Thank
                  you for considering us, and we hope to see you soon!
                </p>
              </div>
            </Col>
            <Col lg="4" className="pt-5">
              <img
                src="https://img.freepik.com/free-vector/realistic-coffee-time-background-with-coffee-cup_79603-1559.jpg?w=740&t=st=1677483780~exp=1677484380~hmac=e0a79edca4abe7c70e7c67e6317c31bacfce4b46fede0985a489530754490cb0"
                alt="aboutImg"
                className="team-image"
              />
              
               <img
                src="https://img.freepik.com/free-photo/coffee-beans-with-props-making-coffee_1220-4536.jpg?w=740&t=st=1677483960~exp=1677484560~hmac=a288f25c30f07c6ebe3081fceee1fbdfbd0756fff639582e538d183e7733765f"
                alt="aboutImg"
                className="team-image"
              />
              <img
                src="https://img.freepik.com/free-vector/top-view-cup-coffee-with-roasted-beans_52683-32340.jpg?w=740&t=st=1677483817~exp=1677484417~hmac=4531d4569c8087d5ed91398a6863ccdc4c5c771a06d3d9121a6b3100acc30d79"
                alt="aboutImg"
                className="team-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default About;
