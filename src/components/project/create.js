import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import {CreateNew} from '../../actions'

class Createproject extends Component {
    state = {
        title: '',
        content: ''
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }
   
    onFormSubmit = (e) => {
        const { auth } = this.props
        e.preventDefault();
        this.props.CreateNew({...this.state, userId:auth.uid})
    }
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to="/login"/>
        return (
            <form className="ui form" style={{ marginTop: '25px' }} onSubmit={this.onFormSubmit}>
                <h2 style={{fontSize:"32px", fontFamily:'Tahoma'}}>Create Project</h2>
                <div className=" seven wide field">
                    <label>Title</label>
                    <input type="text" id="title" placeholder="Title" onChange={(e)=>this.onInputChange(e)} value={ this.state.title} />
                </div>
                
                
                 <div className="seven wide field" style={{paddingRight:'0'}}>
                    <label >content</label>
                    <textarea type={this.state.passclass} id="content" placeholder="content" onChange={(e)=>this.onInputChange(e)} value={this.state.content} ></textarea>
                </div>
               
               
                   

                <button type="submit" className="ui button primary">Create New Project</button>
                
            </form>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth:state.firebase.auth
    }
}
export default connect(mapStateToProps, {CreateNew})(Createproject)

