import React, { useEffect, useState } from 'react'
import { set, useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import Signin from '../../Components/Signin/Signin';
function Add() {
    const navigate = useNavigate()
    const [message, setMessage] = useState('');
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit = (data) => {
        fetch("http://localhost:5000/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
               setMessage(result.message);
                if(result.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Added Successfully',
                        icon: 'success',
                       confirmButtonText:"ok"
                      })
                       navigate('/')
                }
                
               
            });
        console.log(data);
    };

    return (
        <>
            
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Input Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
        <label htmlFor="id" className="block font-semibold text-gray-700">Id</label>
        <input
          {...register("id", {
            required: true,
            pattern: /^[0-9]{1,5}$/ // Pattern to allow only 1 to 3 digits
          })}
          type="number"
          placeholder="id"
          className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500"
        />
        {errors.id && errors.id.type === 'required' && <span>This field is required</span>}
        {errors.id && errors.id.type === 'pattern' && <span>Please enter 3 digits or less</span>}
      </div>

            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
              <input  {...register("name", { required: true })} type="name" placeholder="Name"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="mb-4">
              <label htmlFor="jobTitle" className="block font-semibold text-gray-700">Job-Title</label>
              <input  {...register("jobTitle", { required: true })} type="jobTitle" placeholder="jobTitle"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="joiningDate" className="block font-semibold text-gray-700">Joining Date</label>
              <input  {...register("joiningDate", { required: true })} type="date" placeholder="joiningDate"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="salary" className="block font-semibold text-gray-700">Salary</label>
              <input  {...register("salary", { required: true })} type="number" placeholder="salary"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
              <input  {...register("email", { required: true })} type="email" placeholder="email"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="block font-semibold text-gray-700">Mobile</label>
              <input {...register("mobile", { required: true })} type="number" placeholder="mobile" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold text-gray-700">Address</label>
              <input {...register("address", { required: true })} type="aaddress" placeholder="address" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
        
        </>
    )
}

export default Add