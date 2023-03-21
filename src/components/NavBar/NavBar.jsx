import React from 'react'
import styles from "./styles.module.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { BsArrowRightShort , BsCart4 } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useState } from 'react';
import { logout } from '../../Redux/auth/actions';
const NavBar = () => {

  const [toggleBoxLogout, setToggleBoxLogout] = useState(false);
  const { isAuth, user } = useSelector(state =>  state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);
  console.log("Console log from inside navbar",user.email)
  const dispatch = useDispatch();
  const nav = useNavigate();


  function handleLogout() {
    dispatch(logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }


  return (
    <nav className={styles.wrapper}>
        <div>
          <Link to={"/"}>
            Estarta Ecommerce
            </Link>
        </div>

{!isAuth && (
       <div >
       <Link to="/login">
         <button className={styles.loginBtn}>
           Login  <BsArrowRightShort size={30} />
         </button>
        
       </Link>
     </div>
)
}     
   {isAuth && (

 <div className={styles.RightButtonsNavBarWrapper}>
            <NavLink to="/products">Products</NavLink>
            <Link to="/cart" className={styles.cartIcon}>
              <BsCart4 size={25} />
              <div className={styles.cartItemsCount}>{cartItems?.length}</div>
            </Link>
      <div className={styles.logoutIcon}>
            <BiUserCircle
              onClick={() => setToggleBoxLogout(!toggleBoxLogout)}
              size={30}
            />
            {toggleBoxLogout && (
              <div className={styles.logoutBox}>
                <div>User: {user.email} </div>
                <a onClick={handleLogout} className={styles.logoutText}>
                  Logout
                </a>
              </div>
            )}
      </div>
      
  </div>

  
   )}
        
    </nav>
  )
}

export default NavBar