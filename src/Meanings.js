import React from "react";

export default function Meanings (props){
    return (
        <div className="Meanings">
            <h4>{props.meaning.partOfSpeech}</h4>
             {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}> 
            <p>
                {definition.definition}
            </p>
            <p>
                {definition.example}
            </p>
                    </div>
                ); 
             })}

          
        </div>
    );
}