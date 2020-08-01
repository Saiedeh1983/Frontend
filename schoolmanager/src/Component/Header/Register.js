import React, {Component} from 'react';
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/owl.carousel.min.css';
import './css/owl.theme.default.min.css';
import './css/jquery.fancybox.min.css';
import './css/bootstrap-datepicker.css';
import './css/aos.css';
import './css/style.css'; 

class Register extends Component {
  constructor(props){
    super(props);
  this.state={
    userName:"",
    FirstName:"",
    LastName:"",
    password:"",
    Age:"",
    Email:"",
    Tel:"",
    Address:"",
    ActiveCode:"",
    IsActive:"",
    ErroMessage:""
  }
}
setProfHere=(e)=>{
    e.preventDefault();
    this.props.setProf(this.state.Email, this.state.password)
    //this.props.onSubmit(this.state);
  }

  switch=()=>{
    // if (this.state.email!="" && this.state.password!="")
     {
       
       this.setProfHere.bind(this);
     }
           };

  onChangeHandler=(e)=>{
      
    //e.preventDefault();
    //this.props.onSubmit(this.state);
    let err="";
    let nam=e.target.name;
    let val=e.target.value;
   if(nam=="Age" && !Number(val))
   err="Your age must be a Number";
      this.setState(
      {
        [nam]: val
      }
    );
    this.setState(
      {
         ErroMessage: err
       }
      );
  }



  render(){
  return (

    <div className="Login">
    
      <header className="Login-header">
       
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Forget Password
        </a>
      </header>
      <div className="Login-body">
      <form  class="form-box">
                    <h3 class="h4 text-black mb-4">Sign Up</h3>
                    <div class="form-group">
                    <input  type="text" 
                            class="form-control"
                            placeholder="FirstName"
                            name ="FirstName"
                            value={this.state.FirstName}
                            onChange={e=> this.onChangeHandler(e)}
                   />
                     
                    </div>
                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="LastName"
                          name="LastName"
                          value={this.state.LastName}
                          onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>
                    
                    <div class="form-group">
                    <input type="password"
                           class="form-control"
                           placeholder="Password"
                           name="Password"
                           value={this.state.password}
                           onChange={e=> this.onChangeHandler(e)}
                   /></div>

                   <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Re-type Password"
                           name="Password"
                           value={this.state.password}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>
                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Age"
                           name="Age"
                           value={this.state.Age}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>

                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Email"
                           name="Email"
                           value={this.state.Email}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>

                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Mobile"
                           name="Mobile"
                           value={this.state.Mobile}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>
                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Address"
                           name="Address"
                           value={this.state.Address}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                    </div>
                    
                    <div class="form-group">
                      <input type="submit" class="btn btn-primary btn-pill" value="Sign up" onClick={ this.setProfHere.bind(this)} />
                    </div>
                    
         
       <p> {this.state.ErroMessage} </p>
        


        </form>

      </div>
    </div> 

  );
}
}

export default Register;
