import React, {Component} from 'react';
import Background from "./images/Background.jpg";

import './css/bootstrap.min.css';
//import './css/jquery-ui.css'; 

import './css/style.css';  

/* const propTypes={
  username: PropTypes.string.isRequired,
  password: propTypes.string.isRequired
};

const defaultProps={
  name: "Default",
  password:"pass"
} */
class Profile extends Component {
  constructor(props){
super(props)
  
  this.state={
    Id:"StudentID",
    PersonalPic:"",
    Name:"Name",
    Email:this.props.StudentEmail,
    Summary:"Summary"
  }
  }
onSubmit=fields=>{
  console.log(":", fields);
}
  

  render() {
    const {
      username, password
    }=this.props;
  return (
    

      
    
    <div class="teacher text-center"> 
      <img src={Background} alt="Image" class="img-fluid w-50 rounded-circle mx-auto mb-4"></img>
      <div class="py-2">
        <h3 class="text-black">{this.state.Id}</h3>
  <p class="position">{this.state.Email}</p>
  <p>{this.state.Summary}</p>
  <p>{this.state.Summary}</p>
  <p>{this.state.Summary}</p>
  
      </div>
      </div>
   
 
          

  )


         }
}

export default Profile;
