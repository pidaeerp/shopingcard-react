import React, { useEffect, useState } from "react";

const PokemonList = () => {
  const [currentList, setCurrentList] = useState({});
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=5&offset=0"
  );
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState("");

  const handleSiguiente = () => {
    setUrl(next);
  };

  const handleAnterior = () => {
    previous && setUrl(previous);
  };

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        //console.log(data);
        setCurrentList(data);
        setNext(data.next);
        setPrevious(data.previous);
      });

    return () => {};
  }, [url]);

  return (
    <div>
      {currentList.results && (
        <div>
          {currentList.results.map((poke) => {
            return (
              <div key={poke.name}>
                <h2>{poke.name}</h2>
              </div>
            );
          })}
          <button onClick={handleAnterior}>Anterior</button>
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default PokemonList;
