import React from 'react';
import HomeJsx from "../../html/profile/HomeJsx";
import Login from "../../main/run/Login";
import {useNavigate} from "react-router-dom";

export default function Home () {

    const sessionValue = JSON.parse(JSON.stringify(sessionStorage.getItem(process.env.REACT_APP_SESSIONSTORAGE_TOKEN)));

    const navig = useNavigate();

    let checkSession = () => {
        if (sessionValue == null) {
            return false
        }else {
            return true
        }
    }

    function executeExit() {
        navig('/')
    }

    return (
        checkSession() === Boolean(true) ?  (<HomeJsx executeExit={()=> {executeExit()}}/>) :  (<Login/>)
    )

}
