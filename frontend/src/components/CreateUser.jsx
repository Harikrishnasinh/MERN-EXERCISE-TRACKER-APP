import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const CreateUser = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    "username": ""
  })

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    let msg = "";
    let url = 'http://localhost:4000/users/add'
    axios.post(url, data).then(res => 
      { const ch = res.data
        
      })
      navigate('/userslist')
  }

  return (
    <div className='container card mt-4'>
     
      <form className='card-body' method='post' onSubmit={handleSubmit}>

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fs-4">Username</label>
          <input type="text" name="username" class="form-control fs-4" id="exampleInputEmail1" required onChange={changeHandler} />
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default CreateUser