import { combineReducers } from 'redux';
import ProjectReducer from './projectreducer';
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'
import authReducer from './authreducer'

export default combineReducers({
    auth: authReducer,
    projects: ProjectReducer,
    firebase: firebaseReducer,
    fireStore: firestoreReducer
    
    
})