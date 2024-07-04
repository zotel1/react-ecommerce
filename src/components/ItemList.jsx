import Item from "./Item"

const ItemList = ( {productos} ) => {
    return (
        <div>
            <h1>Productos</h1>
            {
                productos.length > 0 &&
                productos.map((producto) => {
                    return (
                        <Item key={producto.id} producto={producto}/>
                    )
                })
            }
        </div>
    )
}

export default ItemList;