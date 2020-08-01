import React, {Component} from 'react';
   import './Course.css';
import reactpic from './images/React.jpg';
import Duration from './Duration';

class Course extends Component {
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
    const {
      username, password
    }=this.props;
  return (

    
            <div class="course bg-white h-100 align-self-stretch">
              <figure class="m-0">
                <a href="course-single.html"><img src={reactpic} alt="Image" class="img-fluid"></img></a>
              </figure>
             <Duration />
              <div class="d-flex border-top stats">
                <div class="py-3 px-4"><span class="icon-users"></span> 20 students</div>
                <div class="py-3 px-4 w-25 ml-auto border-left"><span class="icon-chat"></span> 2 students</div>
              </div>
            </div>
  )
         }
}

export default Course;
