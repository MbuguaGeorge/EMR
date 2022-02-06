import React from 'react';
import Chat from './chat'
import Home from './home'
import {Routes, Route} from 'react-router-dom'
import EMR from './emr'
import Login from './login'

const Main = () => (
    <Routes>
        <Route exact path = "/" element={<Home/>} />
        <Route path = "/chat" element={<Chat/>} />
        <Route path ="/emr" element={<EMR />} />
        <Route path ="/login" element={<Login />} />
    </Routes>
)

export default Main;