const INITSTATE = {
    isSignedIn: null,
    error: null,
    errmsg:null
}
const authReducer = (state = INITSTATE, action) => {
    switch (action.type) {
        case 'SIGN-IN':
            
            return {...state, error:null, isSignedIn:true }
        case 'FAILED':  
        console.log('not')    
            return { ...state, error: 'login error' }
        case 'SIGN-OUT':
            return { ...state, isSignedIn: false }
        case 'SIGN-UP':
            return { ...state, isSignedIn: true, errmsg:null }
        case 'ERROR':
            return {...state, errmsg:action.err.message}
        default:
            return state
    }
}
export default authReducer