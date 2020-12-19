import React from 'react';
import ProList from './project/pro-list';
import Notification from './notifications';
import { connect } from 'react-redux';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import {Redirect} from 'react-router-dom'

class Dashboard extends React.Component {
    render() {
        const { auth } = this.props
        if(!auth.uid) return <Redirect to="/login"/>
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="ui grid">
                        <div className="row ">
                            <div className="eight wide column pro-list">
                                <ProList projects={this.props.projects} />
                            </div>
                            <div className="five wide column right floated notifications">
                                <div className="ui segment">
                                    <Notification />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  
    return {
        projects: state.fireStore.ordered.projects,
        auth: state.firebase.auth,
        
       
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects', orderBy:['date', 'desc'] }
        
    ])
)(Dashboard)