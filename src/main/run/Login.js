
import Login from "../../html/login/LoginJsx";

import {React, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";


function Home ()  {

    const [password, setPassword] =  useState();
    const [username, setUsername] = useState();

    const [loginButton, setLoginButton] = useState(true);
    const [centredModal, setCentredModal] = useState(false);

    sessionStorage.removeItem(process.env.REACT_APP_SESSIONSTORAGE_TOKEN);

    const navi = useNavigate();

    useEffect(() => {
        if (password === '' || password == null || username === '' || username == null) {
            setLoginButton(true)

        }else {
            setLoginButton(false)
        }
    }, [password, username]);


    const loginExecute = async () => {
        document.getElementById('loadingOnTopLogin').classList.remove('hidden');
        document.getElementById('loadingOnTopLogin').classList.add('show');

        let result = {"username": username, "password": password};

        sessionStorage.setItem(process.env.REACT_APP_SESSIONSTORAGE_TOKEN, result);
        navi('/home');

        document.getElementById('loadingOnTopLogin').classList.remove('show');
        document.getElementById('loadingOnTopLogin').classList.add('hidden');
    }


    const toggleOpen = () => {
        document.querySelector('#loadingOnTop').classList.remove('show');
        document.querySelector('#loadingOnTop').classList.add('hidden');
    };


    const toggleClose = () => {
        setCentredModal(!centredModal);
    };

    return(
        <Login login={loginButton}  setPass={(value) => {setPassword(value)}} setUser={(value) => {setUsername(value)}}
               centerModal={centredModal} setCenterModal={setCentredModal} executeToggleOpen={()=>{toggleOpen()}}
               executeToggleClose={toggleClose} loginExecute={loginExecute}
        />
    );

}

export default Home;