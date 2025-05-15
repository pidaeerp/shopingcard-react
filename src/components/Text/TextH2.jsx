import React, { useEffect, useState } from "react";

const TextH2 = () => {
  const [text, setText] = useState("");

  const handleText = (e) => {
    //console.log(e.target.value);
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("Componente montado!");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  useEffect(() => {
    console.log("Text modificado!");
  }, [text]);

  return (
    <div>
      <input type="text" onChange={handleText} />
      <p>{text}</p>
    </div>
  );
};

export default TextH2;

// Montaje => mounting
// Actualización => updating
// Desmontaje => unmounting
