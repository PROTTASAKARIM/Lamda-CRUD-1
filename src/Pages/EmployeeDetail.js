import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmployeeDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [employeeDetail, setEmployeeDetail] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/employees/${id}`)
            .then(res => res.json())
            .then(data => setEmployeeDetail(data))
    }, [id])

    const navigateToUpdate = (id) => {
        navigate(`/update/${id}`)
    }


    return (
        <div className='container'>
            <img className='w-100 mt-5' src={employeeDetail?.empImg}></img>
            <div className='container mt-2'>
                <h1>Name : {employeeDetail.firstName} {employeeDetail.lastName} </h1>
                <p>Email Address : {employeeDetail.email}</p>
                <p>Designation : {employeeDetail.designation}</p>
                <p>Department : {employeeDetail.department}</p>
                <p>Joining Date : {employeeDetail.joiningDate}</p>
                <p>Email Address : {employeeDetail.address}</p>
                <p>Email Address : {employeeDetail.empImg}</p>
            </div>
            <div className='container d-flex mx-auto'>
                <button onClick={() => navigateToUpdate(employeeDetail._id)} className='btn btn-success mx-2'>Update</button>

            </div>
        </div>
    );
};

export default EmployeeDetail;