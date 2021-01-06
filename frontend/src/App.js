import React , {useState, useEffect} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import Home from './components/pages/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Header from './components/layout/Header';
import UserContext from './context/UserContext';
import Footer from './components/layout/Footer';
import ControlPanel from './components/pages/ControlPanel';

import "./style.css";

export default function App() {

    const [userData, setUserData] = useState({
        token: undefined,
        user: undefined
    })

    useEffect(() => {
        const checkLoggedIn = async () => {
            let token = localStorage.getItem("auth-token");
            if(token === null) {
                localStorage.setItem("auth-token", "");
                token = "";
            }
            const tokenRes = await Axios.post("http://localhost:5000/users/tokenIsValid", null, {headers: {"x-auth-token" : token}});

            console.log(tokenRes.data);
            if(tokenRes.data) {
                const userRes = await Axios.get("http://localhost:5000/users/",  {headers: {"x-auth-token" : token}});

                setUserData({
                    token,
                    user: userRes.data 
                })
            }
        };

        checkLoggedIn();
    }, []);

    return (
        <>
        <BrowserRouter>
        <UserContext.Provider value={{userData, setUserData}}>
        < Header />
        <div className="container">
        <Switch>
            <Route
                path="/" exact
                component= {Home}
            />
            <Route
                path="/Login" 
                component= {Login}
            />
            <Route
                path="/Register" 
                component= {Register}
            />
            <Route
                path="/ControlPanel" 
                component= {ControlPanel}
            />
        </Switch>
        </div>
        <Footer />
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}