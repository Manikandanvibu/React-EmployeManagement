import React from 'react'
import Table from 'react-bootstrap/Table';
import employee from './Employe';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  // useNavigate is used to display the changes happen in database to the browser
  let history=useNavigate()

  const handleDelete=(id)=>{
    // create an id of array
    let index = employee.map(item=>item.id).indexOf(id)
    employee.splice(index,1)

    history('/')
  }


  const handleEdit=(id,uname,age,desig,salary)=>{
    // store the data in local storage
    localStorage.setItem("id",JSON.stringify(id))
    localStorage.setItem("uname",uname)
    localStorage.setItem("age",JSON.stringify(age))
    localStorage.setItem("desig",desig)
    localStorage.setItem("salary",JSON.stringify(salary))

  }


  return (
    <> 
    <h1 className='text-center p-3 mt-3' style={{color:"yellow"}}>Employee Management System</h1>
    <div className='text-center'>
        <p  style={{color:"#ff80ff"}}>
        An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals.
        These tools help monitor, assess and control employees' working hours and efficiently utilise human resources. 
        It ensures that HR efficiently manages each employee's payroll and disburses salaries on time. 
        An EMS securely stores and manages the personal and work-related details of employees.
        This makes it easier for the managers to store and access relevant data when needed.
        </p>
        <Link to='/add'><Button className='mt-3' variant="info">Add New Employe <i class="fa-sharp fa-solid fa-user-plus"></i></Button>{' '}</Link>
    <Table striped bordered hover variant="dark" className='container  mt-5' style={{width:"85%"}}>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>designation</th>
          <th>salary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {
                employee && employee.length>0 ?
                employee.map(item => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.desig}</td>
                        <td>{item.salary}</td>
                        <td>
                        <Link to='/edit'>
                        <Button onClick={()=>handleEdit(item.id,item.name,item.age,item.desig,item.salary)} className='me-2' variant="primary"><i class="fa-solid fa-pen-to-square"></i></Button>{' '}
                        </Link>
                        <Button onClick={()=>handleDelete(item.id,item.name,item.age,item.desig,item.salary)} className='me-2' variant="danger"><i class="fa-solid fa-trash"></i></Button>{' '}
                        </td>
                    </tr>
                ))
                :"No Table Data"
            }
      </tbody>
    </Table>
    </div>
    </>
  )
}

export default Home