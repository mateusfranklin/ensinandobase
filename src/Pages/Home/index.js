import React, { useEffect, useState } from "react";
import Menu from "../../Components/Menu";

import './style.css';

import api from "../../Services/api";

function Home() {
  const key = "d870f3353d5cf268798d6e6a25a2dcbc";

  const [filmes, setFilmes] = useState([]);

  const [linguagem, setLinguagem] = useState("pt-BR");


  useEffect(() => {
    api
      .get(
        `discover/movie?api_key=${key}&language=${linguagem}&sort_by=popularity.desc`
      )
      .then((response) => {
        setFilmes(response.data.results);
      });
  }, [linguagem]);

  return (
    <div>
      <Menu />

      <div className="filmes">
        Em breve nos cinemas -{" "}
        <div onClick={() => setLinguagem('pt-BR')}>
          BR
        </div>{" "}
        | <div onClick={() => setLinguagem('ENG')}>ENG</div>
      </div>

      <ul className="lista">
        {filmes.map((filme) => (
          <li>
            {filme.title}{" "}
            <img
              src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`}
              width="100"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
