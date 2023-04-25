import{ useState, useEffect} from "react";
import ItemList from "./ItemList"
import { products } from "../../productsMock";
/* import useCounter  from "../../utils/hooks/useCounter" */
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {

/*   const{ counter, increment} = useCounter() */

   //codigo viejo//
  const [items , setItems ] = useState([ ])
  const { name }= useParams()
  /* const navigate =useNavigate() */

  useEffect(() => {

    const productsFiltered = products.filter( prod => prod.category === name)

    const tarea = new Promise((resolve, reject) => {
      resolve(name ? productsFiltered : products);
    });
  
    tarea
    .then((res) => setItems(res))
    .catch((error) => console.log(error));

    
  },[name])
  

  return (
    <div>
      <ItemList items = {items}/>
    </div>
  );
};
