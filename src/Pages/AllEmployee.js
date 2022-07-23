import React, { useEffect, useRef, useState } from 'react';
import Employee from './Employee.js';
import './AllEmployee.css';
import Table from 'react-bootstrap/Table';
import TableDetails from './TableDetails';


const AllEmployee = () => {
    const [employees, setEmployees] = useState([]);
    const byName = useRef();
    const byDesignation = useRef();
    const byJoiningDate = useRef();

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    console.log(employees)
    const filterByName = () => {

        const namefilter = byName.current.value;
        const remaining = employees.filter((employee, i) => employee.firstName.toLowerCase() === namefilter.toLowerCase())
        console.log(remaining)
        setEmployees(remaining)

    }
    const filterBydDesignation = () => {
        const remaining = employees.filter((employee, i) => employee.designation === byDesignation.current.value)
        console.log(remaining)
        setEmployees(remaining)
    }
    const filterByjoiningDate = () => {
        const remaining = employees.filter((employee, i) => employee.joiningDate === byJoiningDate.current.value)
        console.log(remaining)
        setEmployees(remaining)
    }
    return (
        <div className='container mt-5'>
            <h1>All Employees</h1>
            <div className='d-flex'>
                <div className='m-2'>
                    <label htmlFor=""> Name : </label>
                    <input ref={byName} className='m-2' type="text" />
                    <button onClick={() => { filterByName() }}>filter</button>
                </div>
                <div className='m-2'>
                    <label htmlFor=""> Designation : </label>
                    <input ref={byDesignation} className='m-2' type="text" />
                    <button onClick={() => { filterBydDesignation() }}>filter</button>
                </div>
                <div className='m-2'>
                    <label htmlFor=""> Joining Date : </label>
                    <input ref={byJoiningDate} className='m-2' type="text" />
                    <button onClick={() => { filterByjoiningDate() }}>filter</button>
                </div>
            </div>

            {/* <div id='emp' className='employee mt-5'>
                {
                    employees.map(emp => <Employee
                        key={emp._id}
                        emp={emp}
                    ></Employee>)
                }
            </div> */}
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Designation</th>
                        <th>Department</th>
                        <th>joiningDate</th>
                        <th>Details</th>
                        <th>Edit</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        employees.map((emp) => <TableDetails
                            key={emp._id}
                            emp={emp}
                        ></TableDetails>)
                    }


                </tbody>
            </Table>

        </div>
    );
};

export default AllEmployee;