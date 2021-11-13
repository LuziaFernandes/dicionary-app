import React, { useState } from "react";
import './SearchEngine.css';
import axios from "axios";


export default function SearchEngine () {

let [keyword, setKeyword] = useState("");

function handleResponse (response) {
console.log(response.data[0]);
}

function search(event){
    event.preventDefault ();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}` ;
    axios.get(apiUrl).then(handleResponse);

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