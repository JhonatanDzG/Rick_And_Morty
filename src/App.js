import './App.css';
import Cards from "./components/Cards.jsx";
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from "./components/Form"
import {useState, useEffect} from 'react';
import axios from "axios";
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

// const example = [{
//    id: 1,
//    name: 'Rick Sanchez',
//    status: 'Alive',
//    species: 'Human',
//    gender: 'Male',
//    origin: {
//       name: 'Earth (C-137)',
//       url: 'https://rickandmortyapi.com/api/location/1',
//    },
//    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
// }]


export default function App() {
   const [characters, setCharacters] = useState([])
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   const EMAIL = "jhonatan@gmail.com";
   const PASSWORD = "JhonatanD7"

   const login = (userData) => {
      if(userData.email === EMAIL && userData.password === PASSWORD){
         setAccess(true);
         navigate("/home");
      }else{
         alert("Credenciales incorrectas")
      }
   }


   

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
 

   const onSearch = (id) => {
      axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            let exist = characters.find((character) => character.id === data.id);
            if(exist){
               alert("Already Exists");
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

const logOut = () => {
      setAccess(false);
      navigate("/");
   }

   const {pathname} = useLocation();

   return ( 
   <div className = 'App' >
      {pathname !== "/" && <Nav logOut = {logOut} onSearch = {onSearch}/>}
         <Routes>
         <Route path='home' element={<Cards onClose = {onClose} characters = {characters}/>}/>
         <Route path='about' element = {<About/>} />
         <Route path='detail/:id' element = {<Detail/>} />
         <Route path ="error" element={<Error/>} />
         <Route path='/' element = {<Form login={login}/>}/>
      </Routes>
   </div>
   );
}
