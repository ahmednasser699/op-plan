import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {signUp} from '../actions'

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName:'',
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
        this.props.signUp(this.state)
    }
    render() {
        const { auth } = this.props
        const {error} =this.props
        if(auth.uid) return <Redirect to="/"/>
        return (
            <form className="ui form" style={{ marginTop: '25px' }} onSubmit={this.onFormSubmit}>
                <h2 style={{fontSize:"32px"}}>Sign Up</h2>
                <div className=" seven wide field">
                    <label>First Name</label>
                    <input type="text" id="firstName" placeholder="First Name" onChange={(e)=>this.onInputChange(e)} value={ this.state.firstName} />
                </div>
                <div className=" seven wide field">
                    <label>Last Name</label>
                    <input type="text" id="lastName" placeholder="Last Name" onChange={(e)=>this.onInputChange(e)} value={ this.state.lastName} />
                </div>
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
                {error ? <p>{ error}</p>:null}
                <button type="submit" className="ui button primary">Sign Up</button>
                
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        error:state.auth.errmsg
        
    }
}
export default connect(mapStateToProps,{signUp}) (SignUp)