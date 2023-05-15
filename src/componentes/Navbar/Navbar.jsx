
import CartWidget from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { db } from "../../firebaseConfig";
import {getDocs, collection} from "firebase/firestore"
import { useEffect, useState} from "react";

export const Navbar = () => {

  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const categoriesCollection = collection(db, "categories");
    getDocs(categoriesCollection)
      .then((res) => {
        let categoriesResult = res.docs.map((category) => {
          return {
            ...category.data(),
            id: category.id,
          };
        });
        setCategories(categoriesResult);
      })
      .catch((err) => (err));
  }, []);


  return (
    <div>
      <div className={styles.containerNavbar}>
        <Link to="/">
        <img style={{display : "flex", width: "80px"}}
          src="https://res.cloudinary.com/dqajub5fw/image/upload/v1680541056/Bodegonidea_gkkosr.jpg"
          alt="Este es el logo del restaurante"
        />
        </Link>
        <div className={styles.categories}>
        {categories.map((category) => {
            return (
              <Link key={category.id} to={category.path}>
                {category.title}
              </Link>
            );
          })}
        </div>
        <CartWidget />
      </div>
      <Outlet/>
    </div>
  );
};
