import React, { useEffect, useState } from "react";
//import { pedirItemPorId } from "../../helpers/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemDatailContainer = () => {
  const [item, setItem] = useState(null);
  const itemId = useParams().id;

  useEffect(() => {
    // Firebase
    const docRef = doc(db, "productos", itemId);

    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });

    // Archivo JSON
    // pedirItemPorId(Number(itemId)).then((resp) => {
    //   setItem(resp);
    // });
    return () => {};
  }, [itemId]);

  return <div>{item && <ItemDetail item={item} />}</div>;
};

export default ItemDatailContainer;
