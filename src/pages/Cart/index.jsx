import React from 'react'
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {AddToCart} from '../../Redux/Cart/actions';
import {Remove_From_Cart} from '../../Redux/Cart/actions'
import { Clear_Cart } from '../../Redux/Cart/actions';


const Cart = () => {

  const {cartItems} = useSelector(state => state.cartReducer)
  console.log(cartItems)
  const dispatch = useDispatch();


  function handleAddToCart(product) {
    dispatch(AddToCart(product));
  }
  function handleRemoveFromCart(product) {
    dispatch(Remove_From_Cart(product));
  }

  function ClearCart() {
    dispatch(Clear_Cart())
  }

  const total = cartItems.reduce((total, current) => {
    return total + current?.price * current?.quantity;
  }, 0);

  return (
    <div>
      Total : ${total}
      {
       
      cartItems.length > 0 ? (
        
        cartItems?.map((cartItem) => (
          <div key={cartItem?.id} className={styles.ItemContainer}>
          <img src={cartItem?.image_link} />
          <div className={styles.CartItemDescreption}>
            <div> {cartItem?.name} </div>
            <div> ${cartItem?.price} </div>
            <div className={styles.showCounter}>
              <button onClick={() => handleRemoveFromCart(cartItem)}>-</button>
              <input
                type="text"
                value={cartItem?.quantity}
              />{" "}
              <button onClick={() => handleAddToCart(cartItem)}>+</button>
            </div>
          </div>
        </div>
        ))
        ) : (
          <div>No items in cart</div>
        )}
        {cartItems.length > 0 ? ( <div><button onClick={()=>ClearCart()}>Clear Cart</button></div>) : ""}
    </div>
  )
}

export default Cart