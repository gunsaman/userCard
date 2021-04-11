import React from 'react';
import {useParams} from 'react-router-dom';
import Divider from '@material-ui/core/Divider';
import { TelephoneFill, Envelope, Building, Globe, GeoAltFill, PersonBadge } from 'bootstrap-icons-react';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import '../App.css';


const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign:'center'
    },
 
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }); 
export default function UserDetail({data}){
    const users = [{data}];
    const classes = useStyles();
    console.log(users)
    const {id} = useParams();
    const  fullUserDetail = (users[0].data.filter(user => user.id === Number(id)));
    
    return(
        <Card className={classes.root}>
        <CardContent>
            <div className="card-title">
                <Typography color="textPrimary" className={classes.pos}>
                    <h1>{fullUserDetail[0].name}</h1>
                    
                </Typography>
                
            </div>
            <Divider variant="middle" />
            <Typography variant="h6" className={classes.pos}>
            <PersonBadge  />Username: @{fullUserDetail[0].username}
            </Typography>

            <Typography variant="subtitle2" className={classes.pos} color="textSecondary">
            <Envelope /> Email: {fullUserDetail[0].email}
            </Typography>
            <Typography  variant="subtitle2" color="textSecondary" className={classes.pos}>
            <Globe  />  Website: http://{fullUserDetail[0].website}
            </Typography>
            <Typography  variant="subtitle2" color="textSecondary" className={classes.pos}>
            <Building  /> Company: {fullUserDetail[0].company.name}
            </Typography>
        
            <Typography variant="subtitle2">
             <TelephoneFill />  {fullUserDetail[0].phone}
            <Typography>
            <div className="address">
                <ul>
                    <GeoAltFill /> Address:
                        <li>Street:{fullUserDetail[0].address.street}</li>
                        <li>Suite:{fullUserDetail[0].address.suite}</li>
                        <li>Zipcode:{fullUserDetail[0].address.zipcode}</li>
                        <li>City:{fullUserDetail[0].address.city}</li>
                        
                </ul> 
            </div>
            </Typography>
            <br />
            
            </Typography>
        </CardContent>
        <CardActions className="detailBtn">
            
        </CardActions>
    </Card>
       /* { <div className="full-card">
            <div className="card-content">
            <h1>{fullUserDetail[0].name}</h1>
            <Divider variant="middle" />
            <p><PersonBadge  />Username: @{fullUserDetail[0].username}</p>
           <p> <Envelope /> Email: {fullUserDetail[0].email}</p>
            <p> <TelephoneFill />  {fullUserDetail[0].phone}</p>
            <p><Building  /> Company: {fullUserDetail[0].company.name}</p>
            <p><Globe  />  Website: http://{fullUserDetail[0].website}</p>
            <ul>
                <p><GeoAltFill /> Address: </p>
                    <li>Street:{fullUserDetail[0].address.street}</li>
                    <li>Suite:{fullUserDetail[0].address.suite}</li>
                    <li>Zipcode:{fullUserDetail[0].address.zipcode}</li>
                    <li>City:{fullUserDetail[0].address.city}</li>
                    
            </ul> 
            <div>
            
            </div>   
            </div>        }                                     
        </div>*/
    )
}