//export const Usuario = (props) => {
export const Usuario = ({ nombre, edad, pais }) => {
  // Desestructurar
  //const { nombre, edad, pais } = props;
  console.log(nombre);

  return (
    <div>
      <h1>Nombre : {nombre}</h1>
      <p>Edad: {edad}</p>
      <p>Nacionalidad: {pais}</p>
      <hr />
    </div>
  );
};
