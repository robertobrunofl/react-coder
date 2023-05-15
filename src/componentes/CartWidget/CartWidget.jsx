import {BsFillCartCheckFill} from "react-icons/bs"
import styles from "./CartWidget.css"
import"./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {

  const { getTotalQuantity } = useContext(CartContext);

  let total = getTotalQuantity()

  return (
    <Link to="/cart">
      <div className="container-cart">
        <BsFillCartCheckFill
          style={{
            fontSize: "2rem",
            color: "orange",
          }}
        />
        <div className="bubble-counter">
          <span>{total}</span>
        </div>
      </div>
    </Link>
  )
}

export default CartWidget