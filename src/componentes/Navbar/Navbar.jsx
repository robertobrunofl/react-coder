import { flexbox } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css"

export const Navbar = () =>{
    
    return ( 
    <div className={styles.containerNavbar}>
       <img src="https://res.cloudinary.com/dqajub5fw/image/upload/v1680541056/Bodegonidea_gkkosr.jpg" 
       alt="Este es el logo del restaurante" srcset="" />
        <ul style={{display:"flex" , gap: "100px"}}>
        <li >Menu</li>
        <li>Haga Su Pedido</li>
        <li>Contacto</li>
        </ul>

        <CartWidget/>
 
    </div>
    );
}