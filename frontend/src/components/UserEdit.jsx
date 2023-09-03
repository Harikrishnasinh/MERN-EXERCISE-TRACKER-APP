import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'

const UserEdit = () => {
    const [usersData,setUsersData] = useState([])
    const { id } = useParams();
    const navigate = useNavigate()
    useEffect(() =>{
        fetchUser();
    },[])

    const fetchUser = async() =>{
        const result = await axios.get('http://localhost:4000/users/'+id)
        setUsersData(result.data)
    }

    const changeHandler = (e) =>{
        setUsersData({
            ...usersData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(usersData)
        const results = axios.post('http://localhost:4000/users/update/'+id,usersData)
        navigate('/')
    }
    return (
        <div className='container card mt-4'>
            <form className='card-body' method='post' onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label fs-4">Username</label>
                    <input type="text" name="username" class="form-control fs-4" id="exampleInputEmail1" value={usersData.username} onChange={changeHandler} />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default UserEdit