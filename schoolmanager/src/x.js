
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Card from 'react-bootstrap/Card';

import './Component/fonts/icomoon/style.css';
import './Component/css/bootstrap.min.css';
//import './Component/css/jquery-ui.css'; 
import './Component/css/owl.carousel.min.css';
import './Component/css/owl.theme.default.min.css';
import './Component/css/jquery.fancybox.min.css';
import './Component/css/bootstrap-datepicker.css';
import './Component/css/aos.css';
import './Component/css/style.css';
import Teachers from './Component/Teachers/Teachers';
import MainMenu from './Component/Header/MainMenu';

function x(){
   // const isok=props.isok;
   
           
   return (<div> <MainMenu /><Teachers /></div>);
}
  export default x;