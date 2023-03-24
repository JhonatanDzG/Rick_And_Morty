import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import {useState} from 'react';
import axios from "axios";

const example = [{
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
}]


export default function App() {

   const [characters, setCharacters] = useState([])


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character) =>character,id === id);
            if(exist){
               alert("Already Exists")
            }else{
               setCharacters((oldChars) => [...oldChars, data]);
            }
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) =>{
      setCharacters((oldChars) =>{
         return oldChars.filter((character) => character.id !==  id)
      })
   }

   return ( 
   <div className = 'App' >
      <Nav onSearch = {onSearch}/>
      <Cards onClose = {onClose} characters = {characters}/>
   </div>
   );
}
