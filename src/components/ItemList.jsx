import Item from "./Item"

const ItemList = ( {productos, titulo} ) => {
    return (
        <div className="container">
            <h2 className="main-title">{titulo}</h2>
            <div>
                { productos.map((prod) => <Item key={prod.id} producto={prod} />) }
            </div>
        </div>
    )
}

export default ItemList;