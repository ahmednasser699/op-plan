import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import swal from 'sweetalert';
import {proDelete} from '../../actions'

const proDetails = (props) => {
    const proId = props.match.params.id
    const { project } = props
    const { auth } = props
    if (!auth.uid) return <Redirect to='/login' />
    if (!project) return null;
    function onDelete() {
       swal({
  title: "Are you sure?",
  text: "Once deleted, you will not be able to recover this project!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
      // eslint-disable-next-line no-sequences
      return props.proDelete(proId), {
      icon: "success",
    };
  } 
});
   }
   function renderdeletbtn(){
        if (project.userId === auth.uid) {
            return (
                <div style={{textAlign:'right'}}>
                    <button className="ui negative button" onClick={onDelete}>Delete</button>
                </div>
            )
        }
    };
    return (
        <div className="ui items" style={{textAlign:'center'}}>
           <div className="ui card" style={{width:'600px', margin:'auto', marginTop:'20px', padding:'20px'}}>
            <div className="item">
                
                <div className="content" >
                        <h2 className="header">{ project.title}</h2>
                        <p className="description" style={{ padding: '15px' }}>{project.content}</p>
                        <p className="extra">{`Posted By ${project.authfirstname} ${project.authlastname}`}</p>
            <p className="extra">{moment(new Date(project.date)).calendar()}</p>
                    </div>
                    {renderdeletbtn()}
                    </div>
                </div>
            </div>
    )
}
const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const projects = state.fireStore.data.projects;
    let project = projects? projects[id]:null
    return {
        project,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps, {proDelete}),
    firestoreConnect([
        {collection:'projects', orderBy:['date', 'desc']}
    ])
)(proDetails)
