import React from 'react';
import Card from './card';
import { Link } from "react-router-dom";


const ProList = ({ projects }) => {
    
    return (
        
        <div className="list-group list">
            {projects && projects.map(project => {
                return (
                    <Link key={project.id}  className="ui link card" to={`/project/${project.id}`}>
                        <Card project={project} />
                    </Link>
                    )
            })}
            </div>
    )
}

export default ProList