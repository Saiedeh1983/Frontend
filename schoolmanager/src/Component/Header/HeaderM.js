import React, {Component} from 'react';
import {BrowserRouter, Router, Route,Link, Redirect} from 'react-router-dom';
import './css/bootstrap.min.css';
import './css/style.css'; 


class HeaderM extends Component {
  constructor(props){
    super(props)
  }
  Show=()=>{
    
    
  }
  render() {
   
  return (

     
          <div className="mx-auto text-center">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                <li><Link to='/Home' style={{color:"black"}} className="nav-link"  >Home</Link></li>
                <li><Link to='/Courses' style={{color:"black"}} className="nav-link">Courses</Link></li>
                
                <li><Link to= '/Teachers' style={{color:"black"}}  className="nav-link">Teachers </Link></li>
                
                
                <li><Link to='/Contact us' style={{color:"black"}} className="nav-link">Contact US </Link></li>
              </ul>
            </nav>
          </div>


        )      }
}
export default HeaderM;




