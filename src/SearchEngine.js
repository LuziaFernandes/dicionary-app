import React, { useState } from "react";
import './SearchEngine.css';
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";


export default function SearchEngine () {

let [keyword, setKeyword] = useState("");
let [results, setResults] = useState (null);
let [photos, setPhotos] = useState(null);

function handleDicitonaryResponse (response) {
setResults(response.data[0]);
}

function handlePexelsResponse (response) {
setPhotos(response.data.photos);
}

function search(event){
    event.preventDefault ();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}` ;
    axios.get(apiUrl).then(handleDicitonaryResponse);
     

    let apiKeyPhotos="563492ad6f917000010000016f0115c6c86644c18a14defcaba701cf";
    let apiUrlPhotos= `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    axios.get(apiUrlPhotos, {headers: {"Authorization": `Bearer ${apiKeyPhotos}`}}).then(handlePexelsResponse);
}

function handleKeywordChange(event) {
    setKeyword(event.target.value);

}

    return(
        <div className="SearchEngine">

<div className="input-title"><strong>What word do you want to look up?</strong></div>

<form onSubmit={search}>
    <input type="search" placeholder="Search a word ..." autoFocus={true} onChange={handleKeywordChange} className="col search-bar"/>
    <input type="submit" className="btn btn-info btn-lg" value="Search"/>
</form>

<Results results={results}/>
<Photos photos={photos}/>
</div>
       );
}