import React from 'react';
import {useParams} from 'react-router-dom';
import '../App.css';

export default function({data}){
    const {id} = useParams();
    const  fullUserDetail = (data.filter(user => user.id == id));
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
            
             
            
            
            
           {console.log(fullUserDetail)}
        </div>
    )
}