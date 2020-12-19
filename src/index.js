import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { Provider,useSelector } from 'react-redux';
import './css/media.css'
import { createStore, applyMiddleware, compose } from 'redux';
import Reducers from './reducers';
import Thunk from 'redux-thunk';
import firebase from 'firebase/app'
import Fbconfig from './config/fb-config';
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import { getFirestore, reduxFirestore, createFirestoreInstance } from "redux-firestore";



// const rrfConfig = {
//     userProfile: 'users',
//     useFirestoreForProfile: true,
//   attachAuthIsReady:true
// };



// const store = createStore(Reducers,
//     compose(
//         applyMiddleware(Thunk.withExtraArgument({getFirebase, getFirestore })),
       
//         reduxFirestore(Fbconfig),
        
//     ));
//     const rrfProps = {
//   firebase,
//   rrfConfig,
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };
   




//     ReactDOM.render(
           
//         <Provider store={store}>
//             <ReactReduxFirebaseProvider {...rrfProps}>
//                 <App />
//                 </ReactReduxFirebaseProvider>
//     </Provider>
//     ,
//     document.getElementById('root')
// ) 
    

const store = createStore(
    Reducers, 
    compose(
        applyMiddleware(Thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase, Fbconfig),
    )
);

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    attachAuthIsReady:true
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance,
    presence: 'presence',
    sessions: 'sessions'
}

function AuthIsLoaded({ children }) {
    const auth = useSelector((state) => state.firebase.auth)
    if (!isLoaded(auth)) return <div>Loading Screen...</div>;
    return children
}

    ReactDOM.render(
    <Provider store={store}>
        <ReactReduxFirebaseProvider { ...rrfProps }>
           <AuthIsLoaded>
                <App />
            </AuthIsLoaded>
        </ReactReduxFirebaseProvider>
    </Provider>, 
    document.getElementById('root')
);




