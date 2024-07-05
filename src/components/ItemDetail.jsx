import {toCapital} from "../helpers/toCapital"
import ItemCount from "./ItemCount";
const ItemDetail = ( {item} ) => {
    return (
        <div className="container">
            <img src={item.imagen} alt={item.titulo}/>
            <div>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="categoria">Categoría: {toCapital(item.categoria)}</p>
                <p className="precio">${item.precio}</p>
                <ItemCount />
            </div>

        </div>
    )
};

export default ItemDetail;