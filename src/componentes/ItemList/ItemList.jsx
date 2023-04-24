import { Margin } from "@mui/icons-material";
import { Link } from "react-router-dom";

import ItemCard from "./ItemCard";
/* import styles from "./ItemList.css" */


const ItemList = ({ items }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        minHeight: "90vh",
        padding: "40px",
        flexWrap: "wrap",
        backgroundColor: "grey",
      }}
    >
      {items.map((item) => {
        return (
          <ItemCard item={item} key={item.id}/>
        );
      })}
    </div>
  );
};

export default ItemList;
