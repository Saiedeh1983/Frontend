import React, {Component} from 'react';
import './Login.css';
import axios  from 'axios';
import PersonalPage from '../Profile/PeronalPage';


class RegisterUser extends Component {
  
    constructor(props){
        super(props);
      this.state={
        userName:"",
        FirstName:"",
        LastName:"",
        password:"",
        Age:"",
        email:"",
        Tel:"",
        Address:"",
        ActiveCode:"",
        IsActive:"",
        ErroMessage:"",
        fields:{},
        item:[],
        isloaded:false
      }
 
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

onSubmit=e=>{
 e.preventDefault();
  console.log("as");

//   axios({
//     method: 'post',
//     url: '/user/',
//     data: {
//       firstName: 'Sara',
//       lastName: 'Trump'
//     }
//   });

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

  //componentDidMount(){
    /* fetch().then(res=>res.json())
    .then(json=>{
      this.setState(
        {
          isloaded:true,
          item:json
        }
      )
    }) */
  //}
    switch(){
      return( <div><PersonalPage username={this.state.email}
                  password={this.state.password}
             /> </div>)
             
            };
 
  render() {
    var {isloaded,items}=this.state;
   
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
                <h1   data-aos-delay="100">Learn from the Expert</h1>
                <p className="mb-4"   data-aos-delay="200">Transformational Thinking Meets Tansformational Doing</p>
                <p  data-aos-delay="300">
                    <a href="#" className="btn btn-primary  px-5 btn-pill">Special Offers</a></p>
              </div>

              
  
      <form  className="form-box">
                    <h3 class="h4 text-black mb-4"></h3>
                    
                    <div class="form-group">
                    <input type="text" 
                           class="form-control"
                           placeholder="Name"
                           name="Name"
                           value={this.state.Name}
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
                   <div class="form-group">
                   <input type="password" 
                           class="form-control"
                           placeholder="Re-type Password"
                           name="repassword"
                           value={this.state.repassword}
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
                           name="email"
                           value={this.state.email}
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
                    
                   
                    <div className="form-group">
                      <input  type="submit" className="btn btn-primary btn-pill" value="Register" onClick={ this.setProfHere.bind(this)}  />
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
export default RegisterUser;
