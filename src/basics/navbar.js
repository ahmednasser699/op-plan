import React from 'react';
import SignInComps from './signin-comps';
import SignOutComps from './signout-comps';
import {connect} from 'react-redux'
import '../css/css-sheet.css';

const NavBar = (props) => {
  const {auth} =  props 
  
    return (
        <div className="ui inverted secondary menu">
        
      
      <a className="navbar-brand brand" href="/">Op-Plan</a>
            
        <div className="right menu">
          {auth.uid?
            
            <SignInComps initials={props.initials }/> :
            <SignOutComps />
          }
          </div>
        

        
        
        </div>
    )
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
     
    auth: state.firebase.auth,
    initials:state.firebase.profile.initName
  }
}
export default connect(mapStateToProps)(NavBar)