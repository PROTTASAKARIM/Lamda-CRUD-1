import React, { useEffect, useState } from 'react';
import Employee from './Employee.js';
import './AllEmployee.css';
import Table from 'react-bootstrap/Table';
import TableDetails from './TableDetails';


const AllEmployee = () => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/employees')
            .then(res => res.json())
            .then(data => setEmployees(data))
    }, [])
    // console.log(employees)
    return (
        <div className='container mt-5'>
            <h1>All Employees</h1>

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