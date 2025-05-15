import React /*, { useState }*/ from "react";
import { useForm } from "react-hook-form";

const Contacto = () => {
  // //   const [nombre, setNombre] = useState("");
  // //   const [email, setEmail] = useState("");

  // const [valores, setValores] = useState({
  //   nombre: "",
  //   email: "",
  //   telefono: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ valores });
  // };

  // //   const handleNombre = (e) => {
  // //     setNombre(e.target.value);
  // //   };

  // //   const handleEmail = (e) => {
  // //     setEmail(e.target.value);
  // //   };

  // const handleValores = (e) => {
  //   setValores({ ...valores, [e.target.name]: e.target.value });
  // };

  const { register, handleSubmit } = useForm();

  const enviar = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <h1 className="main-title">Contacto</h1>
      {/* <form className="formulario" onSubmit={handleSubmit}> */}
      <form className="formulario" onSubmit={handleSubmit(enviar)}>
        <input
          type="text"
          placeholder="Ingresa tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresa tu teléfono"
          {...register("telefono")}
        />
        {/* <input
          type="text"
          placeholder="Ingresa tu nombre"
          value={valores.nombre}
          onChange={handleValores}
          name="nombre"
        />
        <input
          type="email"
          placeholder="Ingresa tu e-mail"
          value={valores.email}
          onChange={handleValores}
          name="email"
        />
        <input
          type="phone"
          placeholder="Ingresa tu teléfono"
          value={valores.telefono}
          onChange={handleValores}
          name="telefono"
        /> */}
        <button className="enviar" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contacto;
