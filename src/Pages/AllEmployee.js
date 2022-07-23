import React, { useEffect, useState } from 'react';
import Employee from './Employee.js';
import './AllEmployee.css'
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
            <div id='emp' className='employee mt-5'>
                {
                    employees.map(emp => <Employee
                        key={emp._id}
                        emp={emp}
                    ></Employee>)
                }
            </div>

        </div>
    );
};

export default AllEmployee;