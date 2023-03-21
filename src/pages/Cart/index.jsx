import React from 'react'
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import {AddToCart} from '../../Redux/Cart/actions';
import {Remove_From_Cart} from '../../Redux/Cart/actions'


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


  return (
    <div>
      {
        cartItems?.map((cartItem) => (
          <div key={cartItem?.id} >
          <img src={cartItem?.image_link} />
          <div >
            <div> {cartItem?.name} </div>
            <div> ${cartItem?.price} </div>
            <div >
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
      }
    </div>
  )
}

export default Cart