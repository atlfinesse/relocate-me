import React from 'react';
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
      Nav
      <Link to ='/home'>Home</Link>
      <Link to ='/about'>About</Link>
    </div>
  );
};

export default Nav;