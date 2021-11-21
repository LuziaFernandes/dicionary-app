import React from "react";
import Meanings from "./Meanings"; 
import Phonetics from "./Phonetics";
import ReactAudioPlayer from 'react-audio-player';
import "./Results.css";

export default function Results (props) {
    if (props.results) {
        return(
            <div className="Results">
           
           
           <h2 className="text-capitalize">{props.results.word}</h2>

        <div className="row phonetics-display justify-content-center">
          <div className="col-2">
           {props.results.phonetics.map(function (phonetic, index){
     return (<div key={index}><Phonetics phonetics={phonetic} /></div>); })}
           </div>
       
                 <div className="col-2">
                 <ReactAudioPlayer src={props.results.phonetics[0].audio} controls/>
                 </div>
                 </div>

        
      
 {props.results.meanings.map( function (meaning, index){
     return (
         <div key={index}>
             <Meanings meaning={meaning} />
          </div>
     );
 })}
    </div>
);
    } else {return (null);}

}