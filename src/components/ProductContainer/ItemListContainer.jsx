import React, { useEffect, useState } from "react";
//import { pedirDatos } from "../../helpers/pedirDatos";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    // Firebase
    const productosRef = collection(db, "productos");
    const q = categoria
      ? query(productosRef, where("categoria", "==", categoria))
      : productosRef;

    getDocs(q).then((resp) => {
      //console.log(resp.docs[0].id);
      //console.log(resp.docs[0].data());
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    // Archivo JSON
    // pedirDatos().then((res) => {
    //   if (categoria) {
    //     setProductos(res.filter((prod) => prod.categoria === categoria));
    //     setTitulo(categoria);
    //   } else {
    //     setProductos(res);
    //     setTitulo("Productos");
    //   }
    // });
    return () => {};
  }, [categoria]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
