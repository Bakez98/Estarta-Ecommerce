import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Home = () => {
  return (
    <div>
    <h1>Welcome to my website!</h1>
    <p>Please login to access the site.</p>
    <Link to="/login">
      <button>Login<AiOutlineArrowRight size={10}/></button>
    </Link>
  </div>
  )
}

export default Home