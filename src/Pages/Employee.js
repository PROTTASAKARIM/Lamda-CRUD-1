import React, { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Employee = ({ emp }) => {
    const navigate = useNavigate();
    const [allEmployee, setAllEmployees] = useState({})

    const { _id } = emp;
    const navigateToDetails = id => {
        navigate(`/employees/${id}`)

        console.log(id);
    }
    const deleteEmplyee = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`https://employee-curd.herokuapp.com/employees/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = allEmployee.filter(employees => employees._id !== id)
                    setAllEmployees(remaining)
                })
        }
    }
    return (
        <div>
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Name: {emp.firstName} {emp.lastName}</Card.Title>
                    {/* <Card.Text>

                    </Card.Text> */}
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Designation:  {emp.designation}</ListGroupItem>
                    <ListGroupItem> Designation:  {emp.department}</ListGroupItem>
                    <ListGroupItem> Joining Date :{emp.joiningDate}</ListGroupItem>
                    {/* <ListGroupItem>{emp.designation}</ListGroupItem> */}
                </ListGroup>
                <button onClick={() => navigateToDetails(_id)} className='btn btn-success'>Details</button>
                <button onClick={() => deleteEmplyee(_id)} className='btn btn-danger'>Delete</button>
            </Card>



        </div >
    );
};

export default Employee;