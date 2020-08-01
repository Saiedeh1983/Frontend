import React, {Component} from 'react';
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/jquery.fancybox.min.css';
import './css/bootstrap-datepicker.css';
import './css/aos.css';
import './css/style.css';  


function RegisterButton (){
  
  return (
          <div className="ml-auto w-25">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                <li className="cta"><a href="Register"  className="nav-link"><span>Register</span></a></li>
              </ul>
            </nav>
            <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a>
          </div>
        )      }

export default RegisterButton;




