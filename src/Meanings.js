import React from "react";
import Synonyms from "./Synonyms.js"; 
import "./Meanings.css";


export default function Meanings (props){
    return (
        <div className="Meanings">
            <h4 className="text-uppercase">{props.meaning.partOfSpeech}</h4>


             {props.meaning.definitions.map(function(definition, index){
                return(
                    <div key={index}> 
            
            <div className="definition-block"> <strong> Definition: </strong> <span className="text-capitalize">{definition.definition}</span></div>


            <div className="example-block"> <strong> Example: </strong><span className="text-capitalize example"> <em>"{definition.example}"</em></span></div>

           <Synonyms synonyms={definition.synonyms}/>
                    </div>
                ); 
             })}

          
        </div>
    );
}