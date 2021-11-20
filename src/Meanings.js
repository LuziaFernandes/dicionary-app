import React from "react";
import Synonyms from "./Synonyms.js"; 


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
            <p> Example: <br/>
                {definition.example}
            </p>

           <Synonyms synonyms={definition.synonyms}/>
                    </div>
                ); 
             })}

          
        </div>
    );
}