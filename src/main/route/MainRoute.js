import {Route, Routes } from 'react-router-dom';
import Login from "../run/Login";
import Home from '../run/Home'
import Error from '../run/Error'
import React from "react";
import {useLocation } from 'react-router-dom';

export default function MainRoute () {

    const history = useLocation();

    if (history.pathname === '/') {
        document.querySelector('#mainHtml').classList.remove('background-image')
        document.querySelector('#mainHtml').classList.add('login-image');
    }else{
        document.querySelector('#mainHtml').classList.remove('login-image');
        document.querySelector('#mainHtml').classList.add('background-image');
    }

    return (
        <Routes>
            <Route exact path="/" element={<Login/>}/>
            <Route exact path="/home" element={<Home/>}/>
            <Route exact path="/error" element={<Error/>}/>
        </Routes>
    )
}