import React from "react";
import './SearchEngine.css';

export default function SearchEngine () {

    return(
        <div className="SearchEngine">

<div className="input-title">What word do you want to look up?</div>

<form><input type="search" placeholder="Search a word ..."/></form>

</div>
       );
}