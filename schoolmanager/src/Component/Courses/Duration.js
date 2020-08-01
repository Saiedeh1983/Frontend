import React, {Component} from 'react';
 import './fonts/icomoon/style.css';
import './Duration.css';

 class Duration extends Component {
  constructor(props){
super(props)
  
  this.state={
      Id:"",
      Picture:"./images/React.jpg",
    Title:"Tiltle",
    Duration:"Duration",
    Summary:"Summary"
  }
  }
onSubmit=fields=>{
  console.log(":", fields);
}
  

  render() {
  return (
              <div class="course-inner-text py-4 px-4">
                <span class="course-price">$20</span>
                <div class="meta"><span class="icon-clock-o" ></span>4 Lessons / 12 week</div>
                <h3><a href="#">React</a></h3>
                <p>Description</p>
              </div>
              
  )
         }
}

export default Duration;
