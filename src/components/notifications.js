import React from 'react';

const Notification = () => {
    return (
        <div className=" ui middle aligned divided list">
            <div href="/" className="item">
                <div className="content">
                <h4 className="header" style={{marginBottom:'3px'}}>notification</h4>
                    <p style={{color:'#a7a8a9'}}>a new user has signed up just now with the name ahmed nasser</p>
                    </div>
            </div>
             <div href="/" className="item">
                <div className="content">
                <h4 className="header" style={{marginBottom:'3px'}}>notification</h4>
                    <p style={{color:'#a7a8a9'}}>a new user has signed up just now with the name khalid sami</p>
                    </div>
            </div>
             <div href="/" className="item">
                <div className="content">
                <h4 className="header" style={{marginBottom:'3px'}}>notification</h4>
                    <p style={{color:'#a7a8a9'}}>a new user has signed up just now with the name mohammed ali</p>
                    </div>
            </div>
        </div>
    )
}
export default Notification