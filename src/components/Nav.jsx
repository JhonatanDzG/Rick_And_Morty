import React from 'react';
import SearchBar from './SearchBar';
import "./Css/Nav.css";
import { Link } from 'react-router-dom';


export default function Nav({onSearch, logOut}){
    


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
      
        
        <button onClick={logOut}>LogOut</button>
        
       
        </div>
    </div>
        )
    
    }
    
    


