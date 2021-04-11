import React from 'react';
import '../App.css';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth:230,
      minWidth: 200,
      minHeight:250,
      textAlign:'center'
    },
 
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    
    title: {
      fontSize: 12,
    },
    pos: {
      marginBottom: 12,
    },
  }); 
export default function UserCard(props) {
    const classes = useStyles();
  
    return(
       
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                    <Avatar className= "card-icon" variant="circular">{props.name.charAt(0)}</Avatar>
                    </Typography>
                    <Typography variant="subtitle2">
                    {props.name}
                    </Typography>
                    <Typography variant="subtitle2" className={classes.pos} color="textSecondary">
                    @{props.username}
                    </Typography>
                    <Typography variant="subtitle2" component="p">
                    <a href={props.website}>https://{props.website}</a>
                    <br />
                    
                    </Typography>
                </CardContent>
                <CardActions className="detailBtn">
                     <Link to={`/user/${props.id}`} style={{textDecoration:"none"}}><ButtonComponent/> </Link>
                </CardActions>
            </Card>
            {/* <div className="card-icon">
                <Avatar>{props.name.charAt(0)}</Avatar>
            </div>
            <div className="card-body">
                <div className="title">{props.name}</div>
                <div className="main-content">@{props.username}</div>
                <div className="main-content"><a href={props.website}>https://{props.website}</a></div>
            </div>
            <Link to={`/user/${props.id}`} style={{textDecoration:"none"}}><ButtonComponent/> </Link> */}
        </div>
    )
}