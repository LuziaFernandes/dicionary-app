import React from "react";
import "./Phonetics.css";

export default function Phonetics (props){
    
    return(
        <div className="Phonetics">
        <p className="phonetics-text">{props.phonetics.text}</p>
        </div>

    );

}