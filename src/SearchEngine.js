import React, { useState } from "react";
import './SearchEngine.css';
import Results from "./Results";
import axios from "axios";


export default function SearchEngine () {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState (null);

function handleResponse (response) {
setResults(response.data[0]);
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

<div className="input-title"><strong>What word do you want to look up?</strong></div>

<form onSubmit={search}>
    <input type="search" placeholder="Search a word ..." autoFocus={true} onChange={handleKeywordChange} className="col-4 search-bar"/>
    <input type="submit" className="btn btn-primary"/>
</form>

<Results results={results}/>
</div>
       );
}