import React, {Component} from 'react';
import MainMenu from './MainMenu';
import RegisterButton from './RegisterButton';

function HomeHeader () {

  return (
<header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">     
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <div className="site-logo mr-auto w-25"><a href="index.html">Virtual Class</a></div>
          <MainMenu />
          <RegisterButton />
        </div>
      </div>      
    </header>

        )     
                      }

export default HomeHeader;




