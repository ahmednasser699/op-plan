import React from 'react';
import moment from 'moment'

const Card = ({project}) => {
    return (
       
            <div className="content">
             <div className="header" style={{color:'#007bff'}}>{project.title}</div>
                <div className="description" style={{marginBottom:'8px'}}> {project.content}</div>
                <div className="meta">
            <span>{moment(new Date(project.date)).calendar()}</span>
                </div>
                </div>
           
    )
}
export default Card