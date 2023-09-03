import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom'

const EditExercise = () => {
  const { id } = useParams()
  const [userdata,setUsersData] = useState([])
  const [data,setData] = useState([])
  const [loading,setLoading] = useState(0)

  const navigate = useNavigate()

  useEffect(() => {
    setFetchUser();
    fetchUserData();
    setLoading(0)
  }, [])

 
  
  const fetchUserData = async () =>{
    const result = await axios.get('http://localhost:4000/users/')
    return(
      setUsersData(result.data)
      )
  console.log(userdata)
}

const setFetchUser = async () => {
  try {
      const results = await axios.get("http://localhost:4000/exercises/"+id);
      // console.log(results.data.users.name);
      // setLoading(1)
      return(
        setData(results.data)
        )
        console.log(results.data)
  } catch (er) {
      console.log("something went wrong");
  }
}
console.log(data)

  const changeHandler = (e) =>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    }) 
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const results = axios.post('http://localhost:4000/exercises/update/'+id,data)
    // console.log(results.data)
    navigate('/')
  }

  return (
    <div>
      <div className='container card mt-4'>
                <form className='card-body' method='post' onSubmit={handleSubmit}>
                <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label fs-4">Username</label>
                <select className='form-select fs-4' aria-label='Default select example' name='username' onChange={changeHandler}>
                <option value="select the user">~~ Select The User ~~</option>
                  {
                    userdata.map((index) => {
                      // console.log(index._id)
                      return (
                        <option selected value={index.username}>{index.username}</option>
                      )
                    })
                  }
                </select>
              </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label fs-4">Description</label>
                  <textarea class="form-control fs-4" name='description' value={data.description} id="exampleFormControlTextarea1" rows="3" onChange={changeHandler}></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">Duration</label>
                  <input type="number" name="duration" class="form-control fs-4" value={data.duration} id="exampleInputEmail1" onChange={changeHandler} />
                </div>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label fs-4">Date</label>
                  <input type="date" name="date" class="form-control fs-4" id="exampleInputEmail1" value={data.date} onChange={changeHandler} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
           
      </div>

    </div>
  )
}

export default EditExercise