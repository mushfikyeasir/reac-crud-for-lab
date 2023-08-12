import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

function Update() {
    // if (data.insertedId) {
    //     refetch();
    //     Swal.fire({

    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Class Added on the cart',
    //         showConfirmButton: false,
    //         timer: 1000
    //     })
    // }
    const id = useParams()
    const userData=useLoaderData()
    console.log(userData);
    const navigate=useNavigate()
    const [updateData, setUpdateData] = useState('')
console.log(updateData);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    console.log(updateData);
    // const postData = (updateData) => {
        fetch(`http://localhost:5000/update/${userData._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateData),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if(result.modifiedCount > 0){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated Successfully',
                        icon: 'success',
                       confirmButtonText:"ok"
                      })
                       navigate('/')
                }
               
            });
    // }
    return (
        <>
            <form onSubmit={handleSubmit((data) => setUpdateData(data))}>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">ID</span>
                                    </label>
                                    <input {...register("id")} type="number" placeholder="Id" className="input input-bordered" value={userData.id}  />
                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input {...register("name")} type="text" placeholder="Name" className="input input-bordered" defaultValue={userData.name}  />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input {...register("email")} type="text" placeholder="Email" className="input input-bordered" defaultValue={userData.email}  />

                                </div>
                                
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Job Tilte</span>
                                    </label>
                                    <input {...register("jobTitle")} type="text" placeholder="jobTitle" className="input input-bordered" defaultValue={userData.jobTitle}  />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Joining Date</span>
                                    </label>
                                    <input {...register("joiningDate")} type="date" placeholder="joiningDate" className="input input-bordered" defaultValue={userData.joiningDate}  />

                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Mobile</span>
                                    </label>
                                    <input {...register("mobile")} type="number" placeholder="mobile" className="input input-bordered" defaultValue={userData.mobile}  />

                                </div>


                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Salary</span>
                                    </label>
                                    <input {...register("salary")} type="number" placeholder="salary" className="input input-bordered" defaultValue={userData.salary}  />

                                </div>
                               
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input {...register("address")} type="text" placeholder="address" className="input input-bordered" defaultValue={userData.address}  />

                                </div>
                               
                                
                                <div className="form-control mt-6">
                                    <button onClick={() => { postData(updateData) }}className="btn btn-primary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            
            </>
            
    )
}

export default Update