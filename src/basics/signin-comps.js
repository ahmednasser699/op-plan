import React from 'react';
import { Link } from 'react-router-dom';
import { Signout } from '../actions'
import {connect} from 'react-redux'

const signincomps = (props) => {
    return (
        <>
           <Link className=" nav-link item" to="/createproject">create</Link>
            <Link onClick={props.Signout} className="nav-link item" to="/login">Sign Out</Link>
            <div className="item av"><h4 className="avatar">{props.initials}</h4></div>
       </> 
    )
}
export default connect(null, {Signout})(signincomps)