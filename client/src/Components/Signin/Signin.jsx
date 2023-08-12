
import React from 'react';

function Signin() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">Input Form</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-semibold text-gray-700">Name</label>
              <input  {...register("name", { required: true })} type="name" placeholder="Name"  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold text-gray-700">Email</label>
              <input {...register("email", { required: true })} type="email" placeholder="Email" className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-blue-500" />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded font-semibold hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
