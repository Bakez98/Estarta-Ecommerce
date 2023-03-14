import React from 'react'
import styles from "./styles.module.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowRightShort } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { useState } from 'react';
import { logout } from '../../Redux/auth/actions';
const NavBar = () => {

  const [toggleBoxLogout, setToggleBoxLogout] = useState(false);
  const { isAuth, user } = useSelector(state =>  state.authReducer);
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
       <div>
       <Link to="/login">
         <button className={styles.loginBtn}>
           Login <BsArrowRightShort size={20} />
         </button>
       </Link>
     </div>
)
}     
   {isAuth && (

 <div>
          <div className={styles.logoutIcon}>
            <BiUserCircle
              onClick={() => setToggleBoxLogout(!toggleBoxLogout)}
              size={30}
            />
            {toggleBoxLogout && (
              <div className={styles.logoutBox}>
                {user.email}
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