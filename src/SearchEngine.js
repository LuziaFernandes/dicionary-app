import React, { useState } from "react";
import './SearchEngine.css';

export default function SearchEngine () {

let [keyword, setKeyword] = useState("");

function search(event){
    event.preventDefault ();
    alert (`${keyword}`);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);

}

    return(
        <div className="SearchEngine">

<div className="input-title">What word do you want to look up?</div>

<form onSubmit={search}><input type="search" placeholder="Search a word ..." autoFocus={true} onChange={handleKeywordChange}/></form>

</div>
       );
}