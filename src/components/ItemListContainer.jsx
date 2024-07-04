import { useEffect, useState } from "react";
import pedirProductos from "./pedirProductos";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            setProductos(res);
        })
    }, [])

    return (
        <div>
            <ItemListContainer productos={productos}/>
        </div>
    )
}

export default ItemListContainer;