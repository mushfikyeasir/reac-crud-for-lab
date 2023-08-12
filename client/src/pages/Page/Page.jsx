import React, { useEffect, useState } from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [renderData, SetRenderData] = useState([]);
    const [search, setSearcData] = useState('') 
    const itemsPerPage = 2; // Number of items to display per page
    useEffect(() => {
        fetch('http://localhost:5000/')
          .then(res => res.json())
          .then(data => {
            SetRenderData(data);
    
          });
      }, [])

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const paginatedData = renderData.slice(startIndex, startIndex + itemsPerPage);


  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/${_id}`, {
          method: "DELETE"
        })
          .then(res => res.json())

          .then(data => {
            console.log(data);
            
            if (data.deletedCount > 0) {
              const remaining=currentUser.filter(User=>User._id !==  _id)
              SetCurrentUser(remaining)
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
            
            navigate('/')

          });
      }
    })

  }

  return (
    <div>
 <div className='flex items-center justify-center mt-10 text-5xl text-blue-800'>
          Welcome to Employee Information System
        </div>
       
    
      
      <div>
        <div>
          <a
          href={`demo.pdf`}
          // download="Example-PDF-document"
          download={true}
          target="_blank"
          rel="noreferrer">
          <p className=' p-3 gap-2 rounded flex text-red-700'>

            <svg hanging={20} width={20} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path>
            </svg>
            Download </p>
        </a>
        </div>
      
      </div>
      <div className=''>
        <form className="flex items-center ">

          <input onChange={(e) => setSearcData(e.target.value)} type="text" placeholder="Search Article" className="input input-bordered input-success w-full max-w-xs " />
          <svg className='-ml-10' width={25} height={25} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </form>

      </div>





      <div className='flex items-center justify-center mt-10'>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
               
                <th>Update Action</th>
                <th>Delete Action</th>

              </tr>
            </thead>
            <tbody>
              {paginatedData ? (
                paginatedData.
                  filter((item) => {
                    return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search)
                  })
                  .map((item) => (
                    // Your mapping logic here
                    <tr key={item._id}>
                      <th>{item._id}</th>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                    
                      <td>
                        <Link to={`/update/${item._id}`}>
                          <button className='btn-sm btn-primary'>Update</button>
                        </Link>

                      </td>
                      <td>
                        <Link to=''>
                          <button onClick={() => handleDelete(item._id)} className='btn-sm btn-warning'>Delete</button>
                        </Link>

                      </td>
                    </tr>

                  ))
              ) : (
                <tr>No data available</tr>
              )}

            </tbody>
          </table>
        </div>
      </div>
      {/* Display your paginated data here */}
      {/* <ul>
        {paginatedData.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul> */}

      {/* Render the Pagination component */}
      <Pagination
        pageCount={Math.ceil(renderData.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
