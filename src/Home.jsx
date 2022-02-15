import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"

import { Link } from "react-router-dom";


const Home = () => {
    return (
       <Card className="text-center mycard" bg="dark" text="light">
           <Row>
               <Col md={{ span: 3 }}>
                    <Card.Img 
                        variant="top" src={require("./my_image.jpg")}
                        style={{ width: '370px', height: '370px'}} 
                    />
                </Col>
                <Col md={{ span: 8}}>
                    <Card.Body>
                        <br /><br />
                        <Card.Text as={'h3'} className="mytext">
                          <p> 
                              Technology is anything that was not around when you were born.
                          </p>
                        - Alan Kay
                        </Card.Text>
                    </Card.Body> 
                    <Row >
                        <Card.Footer className="text-muted">
                            Watch this space! 
                            <Button variant="light" bg="light" className="mx-1">
                                <Link className="mybutton" style={{ color: 'black'}} to="/portfolio">Portfolio</Link>
                            </Button>
                        </Card.Footer>  
                    </Row>
                </Col>
            </Row>
        </Card>
    );
};

export default Home;