import React, {Component} from 'react';
import {BrowserRouter, Router, Route,Link, Redirect,Switch,IndexRedirect} from 'react-router-dom';
 import CoursesList from '../Courses/CoursesList';
import Header from './Header';
import HeaderM from './HeaderM';
import Login from '../Home/Login';
import RegisterUser from '../Home/RegisterUser';
import PersonalPage from '../Profile/PeronalPage';
 
var LoginActive=1;

class MainMenu extends Component {
  constructor(props){
    super(props);
    
    this.state={
      MenuType:1,
      HeaderType:1,
      UserName: "defaultUser",
      Password: "defaultPass"
    }
    
  }
   ChooseComponent=1;

   LoginCall=(x)=>{
    if(x==1)
  return <Login UserName={this.state.UserName} Password={this.state.Password} setProf={this.setProfileWithUsername.bind(this)}/>;
  else  if(x==2)
  return <CoursesList />
  else  if(x==3)
  return <PersonalPage UserName={this.state.UserName} Password={this.state.Password} />
  else  if(x==4)
  return <RegisterUser UserName={this.state.UserName} Password={this.state.Password} setProf={this.setProfileWithUsername.bind(this)}/>
  }
FindUser=(u,p)=>{
  this.setState(
    {
   UserName:u,
   Password:p
  }
  )
}
  Show=(x)=>{
    if(x==1)
    return <Header />
    else return <HeaderM /> 
  }
  
  setCourse=()=>{
  this.setState(
    {
      MenuType:2
    }
  ) 
  };

  setHome=()=>{
    this.setState(
      {
        MenuType:1
      }
    ) 
    };

    setRegister=()=>{
     
      this.setState(
        {
          MenuType:4
        }
      ) 
    }
    setProfile=()=>{
     
      //if (x==3)
      this.setState(
        {
          MenuType:3
          
        }
      )
     
    }
    setProfileWithUsername=(userEmail, userPassword)=>{
     
        //if(userEmail!="" && userPassword!="")
        this.setState(
          {
            UserName:userEmail,
            Password:userPassword,
            MenuType:3
          }
       ) 
        }

    setRegister=()=>{
     
      this.setState(
        {
          MenuType:4
        }
      ) 
    }
  render() {
   // {this.Show(this.state.MenuType)}
  // {this.LoginCall(this.ChooseComponent)};
  return (
    <React.Fragment>
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">     
    <div className="container-fluid">
      <div className="d-flex align-items-center">
        <div className="site-logo mr-auto w-25"><a href="index.html">Virtual Class</a></div>
        <BrowserRouter>
         
         <div className="mx-auto text-center">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
              <li><Link to= '/Profile' className="nav-link" onClick={this.setProfile}>Profile </Link></li>
                
                <li><Link to='/Register' className="nav-link" onClick={this.setRegister} >Register</Link></li>
                <li>
                <Link to= '/Courses' className="nav-link" onClick={this.setCourse}>Courses </Link></li>
                </ul>
            </nav>
          </div>
       
         <div className="ml-auto w-25">
            <nav className="site-navigation position-relative text-right" role="navigation">
              <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                <li className="cta">
               <Link to= '/Home' className="nav-link" onClick={this.setHome}> 
               <span>   Home </span>
                 
                  </Link></li>
              </ul>
            </nav>
            <a href="#" className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span class="icon-menu h3"></span></a>
          </div>
          </BrowserRouter>

      </div>
    </div>      
  </header> 
  {this.LoginCall(this.state.MenuType)}
</React.Fragment>




        )      }
}
export default MainMenu;

 


