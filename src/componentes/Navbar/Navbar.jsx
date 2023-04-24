import { flexbox } from "@mui/system";
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";

export const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
        <img style={{display : "flex", width: "80px"}}
          src="https://res.cloudinary.com/dqajub5fw/image/upload/v1680541056/Bodegonidea_gkkosr.jpg"
          alt="Este es el logo del restaurante"
        />
        </Link>
        <ul style={{ display: "flex", gap: "100px" }}>
        <button variant="contained" onClick={()=>navigate("/category/bebidas")}>Menu</button>
          <button variant="contained" onClick={()=>navigate("/category/bebidas")}>Entradas</button>
          <button variant="contained" onClick={()=>navigate("/category/bebidas")}>Bebidas</button>
        </ul>

        <CartWidget />
      </div>
      <Outlet/>
    </div>
  );
};
