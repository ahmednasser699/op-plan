import React, { Component } from 'react'
import { connect } from 'react-redux'
import { SignIn } from '../actions'
import {Redirect} from 'react-router-dom'

class LogIn extends Component {
    state = {
        email: '',
        password: '',
        passclass:'password'
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    onCheck = (e) => {
        if (e.target.checked) {
           
            this.setState({
                passclass:'text'
            })
        } else {
            this.setState({
                passclass:'password'
            })
        }
        
    }
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.SignIn(this.state)
    }
   
    render() {
        const { autherror } = this.props
        const { auth } = this.props
        if(auth.uid) return <Redirect to="/"/>
        return (
            <form className="ui form" style={{ marginTop: '25px' }} onSubmit={this.onFormSubmit}>
                <h2 style={{fontSize:"32px", fontFamily:'Tahoma'}}>Log In</h2>
                <div className=" seven wide field">
                    <label>E-mail</label>
                    <input type="text" id="email" placeholder="E-mail" onChange={(e)=>this.onInputChange(e)} value={ this.state.email} />
                </div>
                
                 <div className=" fields">
                 <div className="seven wide field" style={{paddingRight:'0'}}>
                    <label >Password</label>
                    <input type={this.state.passclass} id="password" placeholder="Password" onChange={(e)=>this.onInputChange(e)} value={this.state.password} />
                </div>
               
                <div className=" four wide field" style={{marginTop:'33PX'}}>
                 <div className="ui radio checkbox">
                    <input type="checkbox" tabIndex="0" onClick={this.onCheck} />
                    <label>Show Password</label>
                 </div>
                    </div>
                    </div>
          { autherror?<p> {autherror}</p>:null}
                <button type="submit" className="ui button primary">Log In</button>
                
                
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        autherror: state.auth.error,
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps, {SignIn})(LogIn) 
