import React from 'react';
import ProjectUpload from '../auth/ProjectUpload';
import ProjectCards from '../layout/ProjectCards';
import SocialBar from '../layout/SocialBar';

// import React, {useEffect, useContext} from 'react'
// import {useHistory} from "react-router-dom";
// import UserContext from '../../context/UserContext';

export default function Home() {
    // const {userData} = useContext(UserContext);
    // const history = useHistory();
    // useEffect(() => {
    //     if(!userData.user){
    //         history.push('/login');
    //     }
    // })

    return (
        <div>
            {/* < ProjectUpload /> */}
            < ProjectCards />
            <SocialBar />
        </div>
    )
}
