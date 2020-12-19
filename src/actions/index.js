import Firebase from '../config/fb-config' //imported firebase cuz getfirebase didnt work
import history from '../history';


export const CreateNew = (project) => async (dispatch, getState, { getFirestore, getFirebase }) => {
    const firestore = getFirestore();
    console.log(firestore)
    const profile = getState().firebase.profile;
    const id = getState().firebase.auth.uid
    await firestore.collection('projects').add({
        ...project,
        authfirstname: profile.firstName,
        authlastname: profile.secondName,
        date: new Date().toString(),
        userId: id
    }) 
    dispatch({
        type: "CREATE",
        payload: project
    })
    history.push('/')
}
export const proDelete = (id) => async(dispatch, getState, {getFirestore})=> {
    const firestore = getFirestore();
    await firestore.collection('projects').doc(id).delete()
    dispatch({
        type: 'DELETE',
        payload: id
    })
    history.push('/')
}

export const SignIn = (vals) =>  (dispatch) => {
   
    
    Firebase.auth().signInWithEmailAndPassword(
        vals.email,
        vals.password
    ).then(() => {
       
        dispatch({
            
            type: 'SIGN-IN'
        })
    }).catch(() => {
        dispatch({
            type: 'FAILED'
        })
    }
    )
}

export const Signout = () => async (dispatch) => {
    await Firebase.auth().signOut();
    dispatch({
        type:'SIGN-OUT'
    })
}

export const signUp = (vals) =>  (dispatch, { getFirestore, getFirebase }) => {
    // const firestore = getFirestore();
    // const firebase = getFirebase();

     Firebase.auth().createUserWithEmailAndPassword(
        vals.email,
        vals.password
     ).then((response) => {
         return Firebase.firestore().collection('users').doc(response.user.uid).set({
             firstName: vals.firstName,
             secondName: vals.lastName,
             initName: vals.firstName[0] + vals.lastName[0]
         })
     }).then(() => {
         dispatch({
             type: 'SIGN-UP'
         })
     }).catch((err)=>dispatch({
         type: 'ERROR',
         err
    }))
}