import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState} from 'react';
import employee from './Employe';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';


function Add() {


  const [uname, setUname] = useState('')
  const [age, setAge] = useState('')
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState('')


  let history = useNavigate()

const handleAdd=(e)=>{
  e.preventDefault()

  // to generate unique ids
  let ids=uuid()
  let uniqueId = ids.slice(0,8)
  employee.push({
    id:uniqueId,
    name:uname,
    age:age,
    desig:desig,
    salary:salary 
  })
  history('/')
}


  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3'>Add Employee</h1>
      <Container fluid>
        <Row>
          <Col md={4}>
          <div className='text-center mt-4'>
            <img style={{width:"20rem"}} src='https://i.postimg.cc/Gpb8qgWg/add-create-account-icon-new-profile-male-user-vector-line-152165243-removebg-preview.png' alt='null'></img>
           </div>
          </Col>

          <Col md={8}>

            <Form className='border p-5'>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name :</Form.Label>
                <Form.Control  type="text" 
                      onChange={(e) => setUname(e.target.value)} 
                      />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age :</Form.Label>
                <Form.Control  type="text" 
                      onChange={(e) => setAge(e.target.value)} 
                      />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation :</Form.Label>
                <Form.Control  type="text" 
                      onChange={(e) => setDesig(e.target.value)} 
                      />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Salary :</Form.Label>
                <Form.Control  type="text" 
                      onChange={(e) => setSalary(e.target.value)} 
                      />
              </Form.Group>
              <div className='text-center'>
              <Button variant="primary" type="submit"
              onClick={(e) => handleAdd(e)}>
               Add
              </Button>
              </div>
            </Form>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Add