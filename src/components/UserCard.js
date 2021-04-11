import React from 'react';
import '../App.css';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

export default function UserCard(props) {
    
    return(
       
        <div className="user-cards">
            <div className="card-icon">{props.name.charAt(0)}</div>
            <div className="card-body">
                <div className="title">{props.name}</div>
                <div className="main-content">@{props.username}</div>
                <div className="main-content"><a href={props.website}>https://{props.website}</a></div>
            </div>
            <Link to={`/user/${props.id}`} style={{textDecoration:"none"}}><ButtonComponent/> </Link>
        </div>
    )
}