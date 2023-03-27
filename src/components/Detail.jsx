import "./Css/Detail.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div className="DetailContainer">
      <div className="DetailText">
        <h1>{character.name}</h1>
        <h3>Status --- {character.status}</h3>
        <h3>Gender --- {character.gender}</h3>
        <h3>Specie --- {character.species}</h3>
        <h3>Origin --- {character.origin?.name}</h3>
      </div>
      <div>
        <img
          className="DetailImage"
          src={character.image}
          alt={character?.name}
        />
      </div>
    </div>
  );
}
