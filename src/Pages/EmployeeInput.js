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
            .then(result => {
                console.log(result)
                alert('Item added Successfully')
            });
    };

    return (
        <div className='w-50 mx-auto'>
            <h1>Add new Employee</h1>
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
                <input className='btn btn-success' type="submit" value="Add Employee" />
            </form>
        </div>
    );
};

export default EmployeeInput;