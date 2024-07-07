import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div>
            <Link className="menu-link" to='/carrito'>Carrito
            <span className="numerito">0</span>
            </Link>
        </div>
    )
};

export default CartWidget;