import React from 'react'
import styles from "./styles.module.css";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {


  const {loading , isAuth} = useSelector(state => state.authReducer);
  return (
    <nav className={styles.wrapper}>
        <div>
          <Link to={"/"}>
            Estarta Ecommerce
            </Link>
        </div>
        <Link to="/login">
      <button>Login</button>
    </Link>
        {/* {isAuth? ( <Link to="/login">
      <button>Login</button>
    </Link>) :
    (<Link to="/">
    <button>Logout</button>
  </Link>)
    } */}
       
        
    </nav>
  )
}

export default NavBar