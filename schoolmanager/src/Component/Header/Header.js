import React, {Component} from 'react';
import {BrowserRouter, Router, Route,Link} from 'react-router-dom';


function Header(){
  
  return (

          <div className="mx-auto text-center">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                <li><Link to='/Home' className="nav-link"  >Home</Link></li>
                <li><Link to='/Courses' className="nav-link">Courses</Link></li>
                
                <li><Link to= '/Teachers' className="nav-link">Teachers </Link></li>
                
                
                <li><Link to='/Contact us' className="nav-link">Contact US </Link></li>
              </ul>
            </nav>
          </div>

        ) 
           }

export default Header;




