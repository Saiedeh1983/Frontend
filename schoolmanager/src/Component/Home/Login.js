import React, {Component} from 'react';
import './Login.css';
import PersonalPage from '../Profile/PeronalPage';
import './css/bootstrap.min.css';
import './css/style.css';  
import useFetchLogin from '../Profile/useFetchLogin';

class Login extends Component {

  state={email:"",
  password:"1",
    fields:{},
    userItem:[],
    isloaded:false
  }
  

onSubmit=e=>{
  console.log("as");
e.preventDefault();
  console.log("", e);
  {this.switch()}
}
onChangeHandler=(e)=>{
      
  
  //this.props.onSubmit(this.state);
  let err="";
  let nam=e.target.name;
  let val=e.target.value;

    this.setState(
    {
      [nam]: val
   
    }
    );
   }
setProfHere=(e)=>{
  e.preventDefault();
  this.props.setProf(this.state.email, this.state.password);
}
 
    switch=()=>{
     // if (this.state.email!="" && this.state.password!="")
      {
        
        this.setProfHere.bind(this);
      }
            };
 
  render() {
    var {isloaded,userItem}=this.state;
   
    console.log("as");
  //  if(!isloaded){
  //    return <div>Loading...</div>
  //  }
  
  return (

     <div className="intro-section" id="home-section">
      
    <div className=" slide-1 background"  data-stellar-background-ratio="0.5">
    
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="row align-items-center">
      <div className="col-lg-6 mb-4"> 
                <h1  data-aos="fade-up" data-aos-delay="100">Learn From The Expert</h1>
                <p className="mb-4"  data-aos="fade-up" data-aos-delay="200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus.</p>
                <p data-aos="fade-up" data-aos-delay="300"><a href="#" className="btn btn-primary py-3 px-5 btn-pill">Admission Now</a></p>

              </div>

              
  
      <form  className="form-box">
                    <h3 class="h4 text-black mb-4">Sign In</h3>
                    
                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Email Address"
                           name="email"
                           value={this.state.email}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                   </div>
                   <div class="form-group">
                    <input type="password" 
                           class="form-control"
                           placeholder="Password"
                           name="password"
                           value={this.state.password}
                           onChange={e=> this.onChangeHandler(e)}
                   />
                   </div>
                  
                    <div className="form-group">
                   
                      <input  type="submit" className="btn btn-primary btn-pill" value="Sign in" onClick={ this.setProfHere.bind(this)}  />
                    </div>
                    
                   
       </form>
       
              
             </div>
            
           </div>
         </div>
       </div>
     </div>
     </div> 
      

          );
         }
}
export default Login;
