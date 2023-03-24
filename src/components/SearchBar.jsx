import { useState } from "react";
import "./Css/SearchBar.css";


export default function SearchBar({onSearch}) {
   const [id, setId] = useState(""); 

   const handleChange = (event) =>{
      setId(event.target.value)
   }

   return (
      <div className="SearchBar">
         <input className = "InputA" onChange={handleChange} type='search' name = "search" value={id}/>
         <button className = "ButtonA" onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
