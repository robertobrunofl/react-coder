import React from 'react'
/* import { Link } from 'react-router-dom' */
import styles from './ItemDetail.css'
export const ItemDetail = ({product}) => {
  return (
    <div className={styles.containerItemdetail}>
      <img className={styles.itemDetailimg}
      src={product.img} alt="" /> 
      <h2 className={styles.itemDetailtitle}>{product.title}</h2>
      <h2 className={styles.itemDetailprice}>{product.price}</h2>
    </div>
  )
}
