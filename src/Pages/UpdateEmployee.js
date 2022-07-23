import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const UpdateEmployee = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/update/62dc41791257a834fffdaa3d`)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [id])

    console.log(employee)

    const onSubmit = data => {
        console.log(data);

        fetch(`http://localhost:5000/employees`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log(result));
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Update Employee</h1>
            <div className=''>
                <Card>
                    <Card.Img variant="top" src={employee.empImg} />
                    <Card.Body>
                        <Card.Title>Name: {employee.name}</Card.Title>
                        {/* <Card.Text>

                    </Card.Text> */}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem> Designation:  {employee.designation}</ListGroupItem>
                        <ListGroupItem> Joining Date :{employee.joiningDate}</ListGroupItem>
                        <ListGroupItem>Image URL: {employee.empImg}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Designation' {...register("designation", { required: true })} />
                <input className='mb-2' placeholder='Department'  {...register("department", { required: true })} />
                <input className='mb-2' placeholder='Joining Date' {...register("joiningDate", { required: true })} />
                <input className='mb-2' placeholder='Employee Picture URL' {...register("empImg", { required: true })} />
                <input className='btn btn-success' type="submit" value="Add Employee" />
            </form>
        </div>
    );
};

export default UpdateEmployee;