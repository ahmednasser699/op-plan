import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from '../basics/navbar';
import Dashboard from './dashboard';
import ProDetails from './project/proDetails';
import history from '../history';
import SignUp from './sign-up';
import LogIn from './log-in ';
import Create from './project/create';

const App=()=>{
    
        return(
           
         <Router history={history}>
          <div className="nav">
           <div className="ui container">
              <NavBar />
           </div>
          </div>
                        
         <div className="ui container">     
         <Switch>
            <Route exact path="/"  component={Dashboard} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/login" component={LogIn} />
            <Route exact path="/createproject"  component={Create} />                            
            <Route exact path='/project/:id' component={ProDetails} />
         </Switch>                             
         </div>
        </Router>
                
            
            
        )
   
}
export default App