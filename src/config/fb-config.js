import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuWyCOiqx1pS1GqCpGEQYtOPGX_VHpQ4o",
  authDomain: "op-plan-18396.firebaseapp.com",
  projectId: "op-plan-18396",
  storageBucket: "op-plan-18396.appspot.com",
  messagingSenderId: "465692581697",
  appId: "1:465692581697:web:7ace52a0a90c80028a4bc0",
  measurementId: "G-X06H9E57FY"
};
Firebase.initializeApp(firebaseConfig);

export default Firebase