import React, { useState } from "react";
import TextH2 from "./TextH2";

const Text = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={handleShow}>{show ? "Ocultar" : "Mostrar"}</button>
      {show && <TextH2 />}
    </div>
  );
};

export default Text;
