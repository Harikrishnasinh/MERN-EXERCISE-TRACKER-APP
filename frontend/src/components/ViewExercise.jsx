import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom';

const ViewExercise = () => {

    const { id } = useParams();
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(0)

    useEffect(() => {
        fetchData()
        setLoading(0)
    }, [])

    const fetchData = async () => {
        const result = await axios.get('http://localhost:4000/exercises/' + id)
        setLoading(1)
        console.log(result.data)
        return (
            setData(result.data)
        )
    }

    console.log(id)
    return (
        <div>
            <div className='container'>
                <h2 className='fs-1 text-center mt-4'>Details... </h2>
                {
                    loading?  <div>
                    <div className='d-flex flex-column fs-4 mt-4'>
                        <div>
                            <p className='text-decoration-underline'>Username</p>
                        </div>
                        <div>
                    ~> <strong>{data.username}</strong>
                        </div>
                    </div>
                    <hr />
                    <div className='d-flex flex-column fs-4 mt-4'>
                        <div>
                            <p className='text-decoration-underline'>Description</p>
                        </div>
                        <div>
                ~> <strong>{data.description}</strong>
                        </div>
                    </div>
                    <div className='d-flex flex-column fs-4 mt-4'>
                        <div>
                            <p className='text-decoration-underline'>Duration</p>
                        </div>
                        <div>
            ~> <strong>{data.duration} mnts</strong>
                        </div>
                        <div className='d-flex flex-column fs-4 mt-4'>
                            <div>
                                <p className='text-decoration-underline'>Date</p>
                            </div>
                            <div>
                            ~> <strong>{data.date ? data.date.substring(0, 10) : data.date}</strong>
                            </div>
                        </div>
                    </div>

                </div>:<h2>loading...</h2>
                }
              
                <NavLink to={'/'} className='mt-4 w-4/12 btn btn-primary'>Back To DashBoard</NavLink>
            </div>
        </div>
    )
}

export default ViewExercise