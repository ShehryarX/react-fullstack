import React from 'react';
import style from './header.css';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import SideNavigation from './SideNavigation/SideNavigation';

const Header = (props) => {
  const navBars = () =>
    <div className={style.bars}>
      <FontAwesome
        name='bars'
        onClick={props.onOpenNav} 
        style={{
          color: '#dfdfdf',
          padding: '10px',
          cursor: 'pointer',
        }}
      />
    </div>

  const logo = () =>
    <Link to='/' className={style.logo}>
      <img alt='NBA Logo' src='/images/nba_logo.png' />
    </Link>

  



  return (
    <header className={style.header}>
      <SideNavigation {...props} />
      <div className={style.headerOptions}>
        {navBars()}
        {logo()}
      </div> 
    </header> 
  )
}

export default Header;