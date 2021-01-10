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
import BottomNav from './components/layout/BottomNav';
import Menu from './components/pages/Menu';

import "./style.css";
import ProjectPage from './components/pages/ProjectPage';
import AboutPage from './components/pages/AboutPage';
import CategoryWidget from './components/layout/CategoryWidget';
import CategoryPage from './components/pages/CategoryPage';
import Divider from './components/layout/Divider';

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
            <Route
                path="/Project/:id" 
                component= {ProjectPage}
            />
             <Route
                path="/Category/:id" 
                component= {CategoryPage}
            />
            
            <Route
                path="/Menu" 
                component= {Menu}
            />
            <Route
                path="/About" 
                component= {AboutPage}
            />
        </Switch>
        
        </div>
        <Divider />
        <BottomNav />
        <Footer />
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}
