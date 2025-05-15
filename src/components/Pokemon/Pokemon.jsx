import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState();
  //console.log(pokemon);
  const [id, setId] = useState(1);

  const handleAnterior = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  const handleSiguiente = () => {
    setId(id + 1);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resp) => {
        //console.log(resp);
        //console.log(resp.json());
        return resp.json();
      })
      .then((data) => {
        //console.log(data);
        setPokemon(data);
      });
    return () => {};
  }, [id]);

  return (
    <div>
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <br />
          {id > 1 ? (
            <button onClick={handleAnterior}>Anterior</button>
          ) : (
            <button disabled>Anterior</button>
          )}
          <button onClick={handleSiguiente}>Siguiente</button>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
