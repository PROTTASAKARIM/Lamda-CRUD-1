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
        fetch(`https://employee-curd.herokuapp.com/update/${id}`)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [id])

    console.log(employee)

    const onSubmit = data => {
        console.log(data);
        const url = `https://employee-curd.herokuapp.com/employees/${id}`;
        console.log(url)
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                alert('Item updated Successfully')
            })
            .catch((error) => {
                console.error('error: ', error)
            });
    };
    return (
        <div className='w-50 mx-auto'>
            <h1>Update Employee</h1>
            <div className=''>
                <Card>
                    <Card.Img variant="top" src={employee.empImg} />
                    <Card.Body>
                        <Card.Title>Name: {employee.firstName} {employee.lastName}</Card.Title>
                        {/* <Card.Text>

                    </Card.Text> */}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem> Designation:  {employee.email}</ListGroupItem>
                        <ListGroupItem> Designation:  {employee.designation}</ListGroupItem>
                        <ListGroupItem> Designation:  {employee.department}</ListGroupItem>
                        <ListGroupItem> Joining Date :{employee.joiningDate}</ListGroupItem>
                        <ListGroupItem>Image URL: {employee.empImg}</ListGroupItem>
                        <ListGroupItem> Address:  {employee.address}</ListGroupItem>
                    </ListGroup>
                </Card>
            </div>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='First Name' {...register("firstName", { required: true, maxLength: 20 })} required />
                <input className='mb-2' placeholder='Last Name' {...register("lastName", { required: true, maxLength: 20 })} required />
                <input className='mb-2' placeholder='Email' {...register("email", { required: true })} required />
                <input className='mb-2' placeholder='Address' {...register("address", { required: true })} required />

                <select className='mb-2' placeholder='Designation' {...register("designation", { required: true })}>
                    <option value="Programmer">Programmer</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Other">Other</option>
                </select>

                <select className='mb-2' placeholder='Department' {...register("department", { required: true })}>
                    <option value="MIS">MIS</option>
                    <option value="RND">RND</option>
                    <option value="ACCOUNTING">other</option>
                </select>
                <input className='mb-2' placeholder='Joining Date' {...register("joiningDate", { required: true })} />
                <input className='mb-2' placeholder='Employee Picture URL' {...register("empImg", { required: true })} />
                <input className='btn btn-success' type="submit" value="Update Employee" />
            </form>
        </div>
    );
};

export default UpdateEmployee;