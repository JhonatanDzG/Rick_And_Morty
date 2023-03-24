import React from 'react';
import SearchBar from './SearchBar';
import "./Css/Nav.css";

export default function Nav({onSearch}){
    return (
        <div className='NavBar'>
            <SearchBar onSearch= {onSearch}></SearchBar>
        </div>
    );
}


