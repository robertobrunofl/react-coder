import styles from "./ItemList.css"

const ItemList = ({saludo}) => {
  return (
    <div className={styles.containerItemList}>
        <h2>{saludo}</h2>
    </div>
  )
}

export default ItemList