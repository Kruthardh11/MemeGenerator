import React from "react";
import   '../components/style.css';

export default function Profile(props){
    return(
    <div className="profilesubdiv">
        
        <h3>{props.item.id}</h3>
        <img src={props.item.image} alt="characterPic"></img>
        <h3>{props.item.firstName}</h3>
        <h3>{props.item.lastName}</h3>
        <h3>{props.item.age}</h3>
        <h3>{props.item.position}</h3>
    </div>
    )
}