import React from 'react';
import SearchBar from './SearchBar';
import "./Css/Nav.css";
import { Link } from 'react-router-dom';

export default function Nav({onSearch}){
    return (
        <div className='NavBar'>
            <SearchBar onSearch = {onSearch}></SearchBar>
            <div className='bAboutHome'>
            <Link to={"/about"}>
                <button>About</button>
            </Link>
            <Link to={"/home"}>
                <button>Home</button>
            </Link>
            </div>
        </div>

    );
}


