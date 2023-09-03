import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';


const CreateExercise = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState([])
  const [message, setMessage] = useState("")

  useEffect(() => {
    axios.get(`http://localhost:4000/users`)
      .then(res => {
        const persons = res.data;
        // this.setState({ persons });
        // console.log(persons)
        setUser(res.data)
        console.log(user)

      })
  }, [])

  const url = 'http://localhost:4000/users/'
  // console.log(user)

  // const fetchUsers = async () =>{
  //   return fetch(url) 
  //   .then((res) => res.json())
  //   .then((d) => setUser(d.results))
  // }

  const [data, setData] = useState({
    "username": "",
    "description": "",
    "duration": "",
    "date": new Date(),
    // 'Users' : ['test1','test2']
  })

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)
    let url = 'http://localhost:4000/exercises/add'
    axios.post(url, data)
      .then(res => {
        const resD = res.data
        // console.log(resD)
        setMessage(resD)
        console.log("message" + message)
        setData([])
        navigate('/')
      })
  }
  return (
    <div className='container'>
    {
      message == "" ?  <div className='card mt-4'>
      <form className='card-body' method='post' onSubmit={handleSubmit}>
      <label for="exampleFormControlTextarea1" class="form-label fs-4">Username</label>
        <select className='form-select fs-4' aria-label='Default select example' name='username' onChange={changeHandler}>
        <option selected value="select the user">~~ Select The User ~~</option>
          {
            user.map((index) => {
              // console.log(index._id)
              return (
                <option value={index.username}>{index.username}</option>
              )
            })
          }
        </select>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label fs-4">Description</label>
          <textarea class="form-control fs-4" name='description' id="exampleFormControlTextarea1" rows="3" required onChange={changeHandler}></textarea>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fs-4">Duration</label>
          <input type="number" name="duration" class="form-control fs-4" id="exampleInputEmail1" required onChange={changeHandler} />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label fs-4">Date</label>
          <input type="date" name="date" class="form-control fs-4" id="exampleInputEmail1" required onChange={changeHandler} />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>:  <div class="mt-4 alert alert-warning alert-dismissible fade show" role="alert">
  
      <strong>Exercise Added Succesfully</strong>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      <NavLink to={'/'} type="button" className='btn btn-primary pr-4 fs-5' >Check The User</NavLink>
    </div>
    }
  
     
    </div>
  )
}
export default CreateExercise