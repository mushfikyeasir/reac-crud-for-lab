import React, { useEffect, useState } from 'react';
import Pagination from '../../Components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [renderData, SetRenderData] = useState([]);
    const [search, setSearcData] = useState('') 
    const itemsPerPage = 1; // Number of items to display per page
    useEffect(() => {
        fetch('http://localhost:5000/')
          .then(res => res.json())
          .then(data => {
            SetRenderData(data);
    
          });
      }, [])
console.log(renderData)
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
      <div className='lg:flex items-center gap-3 mt-5 justify-center '>

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
                
                <th>Id</th>
                <th>Name</th>
                <th>Job_Title</th>
                <th>Joining_Date</th>
                <th>Salary</th>
                <th>Email</th>
                
                <th>mobile_no</th>
                <th>Address</th>

                <th>Update Action</th>
                <th>Delete Action</th>

              </tr>
            </thead>
            <tbody>
              {paginatedData ? (
                paginatedData.
                  filter((item) => {
                    return search === '' ? item : item.name.includes(search)
                    // return search.toLocaleLowerCase() === '' ? item : item.name.toLocaleLowerCase().includes(search)
                  })
                  .map((item) => (
                    // Your mapping logic here
                    <tr key={item._id}>
                      <th>{item.id}</th>
                      <td>{item.name}</td>
                      <td>{item.jobTitle}</td>
                      <td>{item.joiningDate}</td>
                      <td>{item.mobile}</td>
                      <td>{item.salary}</td>
                      <td>{item.mobile}</td>
                      <td>{item.address}</td>
                    
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

export default Home;
