import {BsFillCartCheckFill} from "react-icons/bs"
import styles from "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className={styles.containerCart}>
        <BsFillCartCheckFill size = {30} color = "orange"  />
        <span>0</span>
    </div>
  )
}

export default CartWidget