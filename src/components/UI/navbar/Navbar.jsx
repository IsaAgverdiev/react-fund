import React, { useContext } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  return isAuth ? (
    <div className='navbar'>
      <div className='navbar__links'>
        <Link to='/about' className='navbar__link'>
          About
        </Link>
        <Link to='/posts' className='navbar__link'>
          Posts
        </Link>
      </div>
      <MyButton onClick={logOut}>Log out</MyButton>
    </div>
  ) : (
    <div className='navbar'>Welcome, this login page</div>
  );
};

export default Navbar;
