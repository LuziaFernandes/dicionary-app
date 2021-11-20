import React from "react";

export default function Phonetics (props){
    console.log(props.phonetics);
    return(
        
        <div className="Phonetics">
             <a href={props.phonetics.audio} target="_blanck">Click</a>
              <p>{props.phonetics.text}</p>
        </div>

    );

}