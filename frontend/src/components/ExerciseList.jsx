import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'

const ExerciseList = () => {
  const [data,setData] =useState([])
  const [Loading,setLoading] = useState(0)
  const navigate = useNavigate();
  
  useEffect(() => {
    setFetchUser();
    
    setLoading(0)
}, [])
const refresh = () =>{
  window.location.reload(false)
}

// refresh()
const setFetchUser = async () => {
    try {
        const results = await axios.get("http://localhost:4000/exercises/");
        // console.log(results.data.users.name);
        setLoading(1)
        console.log(results.data)
        setData(results.data)
    } catch (er) {
        console.log("something went wrong");
    }
}

const HandleDelete = async (id) =>{
  axios.delete('http://localhost:4000/exercises/'+id)
  const newExercise = data.filter((item) =>{
    return(
      item.id != id
    )
  })
  setData(newExercise);
  navigate('/create')
}
  let counter =0;
  return (
    <div className='container'>
    {
      Loading?<h2>
    <div className='table table-responsive'>
          <table className="table table-light table-hover container mt-4 fs-4">
        <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>View</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
          
        
        {
          data.map((index) =>{
            return(
              <tr>
              <td>{counter=counter+1 }</td>
              <td>{index.username}</td>
              <td>{index.description}</td>
              <td>{index.duration} mnts</td>
              <td>{index.date.substring(0,10)}</td>
              <td>{<NavLink to={`/checkexercise/${index._id}`} className='btn btn-primary'>View</NavLink>}</td>
              <td>{<NavLink to={`/edit/${index._id}`} className='btn btn-primary'>Edit</NavLink>}</td>
              <td>{<button onClick={()=>HandleDelete(index._id)} className='btn btn-danger'>Delete</button>}</td>
              </tr>
            )
          })
        }
       
    </table>
    
    
    </div>
    </h2>:<h2>Loading...</h2>
        }
    </div>
  )
}

export default ExerciseList