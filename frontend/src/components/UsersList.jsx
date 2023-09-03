import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom';

const UsersList = () => {
  const [user,setUser] = useState([]);
  const[loading,setLoading] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    fetchUser()
    setLoading(0)
  }, [])  

  const fetchUser = async () =>{
    setLoading(1)
    const result = await axios.get('http://localhost:4000/users/')
    return(
        setUser(result.data)
    )
  }
  const handleDelete = async (e) =>{
    console.log(e)
    const result = await axios.delete('http://localhost:4000/users/delete/'+e)
    .then(res => console.log(res))
   const newUserdata = user.filter((item) =>{
    return(
      item.id != id
    )
   })
      setUser(newUserdata)
      navigate('/')
      // navigate('/userslist')

  }

  console.log(user)
let id = 0
  return (
    <div>
    {loading?<h2>Loading...</h2>:<div className='table table-responsive'>
    <table className='table table-light table-hover container mt-4 fs-4'>
    
        <thead>
          <tr>
            <td>Index</td>
            <td>User</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
        <tbody>

        {user.map((index) =>{
          return(
            <tr>
            <td>{id = id+1}</td>
            <td>{index.username}</td>
            <td><NavLink to={`/useredit/${index._id}`} type="button" className='btn btn-primary'>Edit</NavLink></td>
            <td><button onClick={()=>handleDelete(index._id)} type="button" className='btn btn-danger'>Delete</button></td>
            </tr>
          )
        })}
          
      
        </tbody>
    
    </table>
  </div>}
      
    </div>
  )
}

export default UsersList