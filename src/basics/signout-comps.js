import React from 'react';
import { Link } from 'react-router-dom';


const signoutcomps = () => {
    return (
        <>
           <Link className="nav-link item" to="/signup">sign up</Link>
           <Link className="nav-link item" to="/login">log in</Link>
       </> 
    )
}
export default signoutcomps