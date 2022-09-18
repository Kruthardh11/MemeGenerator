import React from "react";
import   '../components/style.css';
import data from "./data";
import Profile from "./Profile";

export default function Main(){
    const profile = data.map(item=>{
        return(
            <Profile 
                id= {item.id}
                item={item}
            />
        )
    })
    return (
    <div className="main">Main shit here 
        <div className="profilediv">{profile}</div>
    
    </div>
    )
}