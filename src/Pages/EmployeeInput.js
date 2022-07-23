import React from 'react';
import { useForm } from 'react-hook-form';

const EmployeeInput = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);

        fetch(`http://localhost:5000/employees`, {
            method: 'POST',
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
            <h1>Add new Employee</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-2' placeholder='Designation' {...register("designation", { required: true })} />
                <input className='mb-2' placeholder='Department' {...register("department", { required: true })} />
                <input className='mb-2' placeholder='Joining Date' {...register("joiningDate", { required: true })} />
                <input className='btn btn-success' type="submit" value="Add Employee" />
            </form>
        </div>
    );
};

export default EmployeeInput;