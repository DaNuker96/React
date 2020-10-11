import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import {Container, Row, Col, Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>

        <Form>
          <Row>
            <Col md>
          <Form.Group controlId="forEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com"/>
            <Form.Text className="text-muted">
              We'll never share your email
            </Form.Text>
          </Form.Group>
            </Col>
            <Col md>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password"/>
          </Form.Group>
          </Col>

          </Row>

          <Button variant = "secondary" type="submit">Login</Button>
        </Form>

        <Card ClassName="mb-3" style={{color: "#000"}}>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>
              card example
            </Card.Title>
            <Card.Text>
              example of text on the card
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        </Container>

        <Breadcrumb> 
        <Breadcrumb.Item>Test1</Breadcrumb.Item>
        <Breadcrumb.Item>Test2</Breadcrumb.Item>
        <Breadcrumb.Item>Test3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">This is a button</Alert>
        <button>Test Button</button>

        
        
      </header>
    </div>
  );
}

export default App;
