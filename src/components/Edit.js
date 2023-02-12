import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import employee from './Employe';
import { useNavigate } from 'react-router-dom';

function Edit() {
  const [id, setId] = useState(0)
  const [uname, setUname] = useState('')
  const [age, setAge] = useState(0)
  const [desig, setDesig] = useState('')
  const [salary, setSalary] = useState(0)


  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("id")))
    setUname(localStorage.getItem("uname"))
    setAge(JSON.parse(localStorage.getItem("age")))
    setDesig(localStorage.getItem("desig"))
    setSalary(JSON.parse(localStorage.getItem("salary")))
  }, [])


  var index = employee.map((item) => item.id).indexOf(id)
  let history = useNavigate()

  const handleUpdate = (e) => {
    // to stop the button working again and again
    e.preventDefault()

    let emp = employee[index]
    emp.name = uname
    emp.age = age
    emp.desig = desig
    emp.salary = salary

    history('/')
  }


  return (
    <>
      <h1 className='text-center text-warning p-3 mt-3'>Update Details</h1>
      <Container fluid>
        <Row>
          <Col md={4}>
            <div className='text-center mt-5'>
            <img src='https://i.postimg.cc/s2SvK9L0/egehge-removebg-preview.png' alt='null'></img>
            </div>
          </Col>

          <Col md={8}>

            <Form className='border p-5'>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Name :</Form.Label>
                <Form.Control value={uname} type="text" required 
                onChange={(e) => setUname(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Age :</Form.Label>
                <Form.Control value={age} type="text" required
                 onChange={(e) => setAge(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Designation :</Form.Label>
                <Form.Control value={desig} type="text" required
                onChange={(e) => setDesig(e.target.value)} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Salary :</Form.Label>
                <Form.Control value={salary} type="text" required
                onChange={(e) => setSalary(e.target.value)} />
              </Form.Group>

              <div className='text-center'>
              <Button onClick={(e) => handleUpdate(e)} variant="primary" type="submit">
                Update
              </Button>
              </div>

            </Form>

          </Col>
        </Row>
      </Container>
    </>

  )
}

export default Edit