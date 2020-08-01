import React, {Component} from 'react';
import './css/style.css'; 
 import Profile from './Profile';
 
 
class PersonalPage extends Component {
  constructor(props){
    super(props);
  this.state={
    email:this.props.UserName,
    password:this.props.password,
    fields:{},
    item:[],
    isloaded:false
       }
  }
  
onSubmit=e=>{
  console.log("as");
e.preventDefault();
  console.log("", e);
  {this.switch()}

  //this.props.s
}
 componentDidMount(){
/*fetch().then(res=>res.json())
    .then(json=>{
    this.setState(
           {
          isloaded:true,
         item:json
      })
      
    }) */
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
      // return( <div><App username={this.state.email}
      //             password={this.state.password}
      //        /> </div>)
             
            };
 
  render() {
    var {isloaded,items}=this.state;
   
    console.log("as");
  //  if(!isloaded){
  //    return <div>Loading...</div>
  //  }
  
  return (



<div class="site-section" id="programs-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-lg-7 text-center"  >
            <h2 class="section-title">First Name Last Name</h2>
            <p>Text</p>
          </div>
        </div>
        <div class="row mb-5 align-items-center">
         <Profile StudentEmail={this.state.email}/>
          <div class="col-lg-4 ml-auto">
            <h2 class="text-black mb-4">Student</h2>
            <p class="mb-4">Characteristics</p>

            <div class="d-flex align-items-center custom-icon-wrap mb-3">
              <span class="custom-icon-inner mr-3"><span class="icon icon-graduation-cap"></span></span>
              <div><h3 class="m-0">Graduated Curses:</h3></div>
            </div>

            <div class="d-flex align-items-center custom-icon-wrap">
              <span class="custom-icon-inner mr-3"><span class="icon icon-university"></span></span>
              <div><h3 class="m-0">Desired Courses:</h3></div>
            </div>

 </div>
        </div>

      </div>
    </div>



    
          );
         }
}
export default PersonalPage;
