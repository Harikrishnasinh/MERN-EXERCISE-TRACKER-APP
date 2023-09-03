import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ExerciseList from './components/ExerciseList'
import EditExercise from './components/EditExercise'
import CreateExercise from './components/CreateExercise'
import CreateUser from './components/CreateUser'
import Navbar from './components/Navbar'
import UsersList from './components/UsersList'
import UserEdit from './components/UserEdit'
import ViewExercise from './components/ViewExercise'

const App = () => {
    return (
        <Router>
        <Navbar></Navbar>
            <Routes>
                <Route path="/" exact element={<ExerciseList />} />
                <Route path="/edit/:id" element={<EditExercise />} />
                <Route path="/create" element={<CreateExercise />} />
                <Route path="/user" element={<CreateUser />} />
                <Route path="/userslist" element={<UsersList />} />
                <Route path="/useredit/:id" element={<UserEdit />} />
                <Route path="/checkexercise/:id" element={<ViewExercise />} />
            </Routes>
        </Router>
    )
}

export default App