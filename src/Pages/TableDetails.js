import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TableDetails = ({ emp }) => {
    const { firstName, lastName, designation, department, joiningDate } = emp;
    const navigate = useNavigate();
    const [allEmployee, setAllEmployees] = useState({})

    const { _id } = emp;
    const navigateToDetails = id => {
        navigate(`/employees/${id}`)

        console.log(id);
    }

    const navigateToUpdate = (id) => {
        navigate(`/update/${id}`)
    }
    const deleteEmplyee = (id) => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            fetch(`http://localhost:5000/employees/${id}`, {
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

        <tr>
            <td>1</td>
            <td>{firstName}</td>
            <td>{lastName}</td>
            <td>{designation}</td>
            <td>{department}</td>
            <td>{joiningDate}</td>
            <td> <button onClick={() => navigateToDetails(_id)} className='btn btn-primary'>Details</button></td>
            <td> <button onClick={() => navigateToUpdate(_id)} className='btn btn-success mx-2'>Update</button></td>
            <td><button onClick={() => deleteEmplyee(_id)} className='btn btn-danger'>Delete</button></td>
        </tr>


    );
};

export default TableDetails;