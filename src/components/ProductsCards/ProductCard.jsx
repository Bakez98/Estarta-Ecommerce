import React from 'react'
import styles from "./styles.module.css";
import { useDispatch } from 'react-redux';
import  AddToCart  from '../../Redux/Cart/actions';

const ProductCard = ({product}) => {

  const dispatch = useDispatch()

  function HandleAddToCart(product) {
    dispatch(AddToCart(product))
  }


  return (
    <div>

        <div className={styles.CardWrapper}>
          <div> <img src={product.image_link} className={styles.CardImg} alt="Error Product Img not found" /></div>
       <div className={styles.CardDiscreption}>   
       <div>{ product.name} </div>
       <div>{product.rating} </div>
       <div>${product.price} </div>
       <button onClick={() => HandleAddToCart(product)}>Add to Cart</button>
       </div>

   </div></div>
  )
}

export default ProductCard