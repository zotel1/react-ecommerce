import { useEffect, useState } from "react";
import {pedirDatos} from "../helpers/pedirDatos";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

    console.log('Renderizando ItemListContainer');

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState("Productos");
    const categoria = useParams().categoria;

    useEffect(() => {
        pedirDatos()
        .then((res) => {
            if (categoria) {
                setProductos(res.filter((prod) => prod.categoria === categoria));
                setTitulo(categoria)
            } else {
            setProductos(res);
            setTitulo("Productos")
            }
        })
    }, [categoria])

    return (
        <div>
            <ItemListContainer productos={productos} titulo={titulo}/>
        </div>
    )
}

export default ItemListContainer;