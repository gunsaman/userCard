import React from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

export default function UserDetail({data}){
    const users = [{data}];
    console.log(users)
    const {id} = useParams();
    const  fullUserDetail = (users[0].data.filter(user => user.id === Number(id)));
    
    return(
        <div className="full-card">
            <h1>{fullUserDetail[0].name}</h1>
            <p>-username: @{fullUserDetail[0].username}</p>
            <p>-email: {fullUserDetail[0].email}</p>
            <p>-phone: {fullUserDetail[0].phone}</p>
            <p>-company: {fullUserDetail[0].company.name}</p>
            <p>-website: http://{fullUserDetail[0].website}</p>
            <p>-address: </p>
            <ul>
                <li>street:{fullUserDetail[0].address.street}</li>
                <li>suite:{fullUserDetail[0].address.suite}</li>
                <li>city:{fullUserDetail[0].address.city}</li>
                <li>zipcode:{fullUserDetail[0].address.zipcode}</li>
            </ul>                                                
        </div>
    )
}