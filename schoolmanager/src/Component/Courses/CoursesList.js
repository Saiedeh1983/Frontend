import React, {Component} from 'react';
import './CourseList.css';
import Course from './Course';
import CourseHeader from './CourseHeader';

class CoursesList extends Component {
  constructor(props){
super(props)
  
  this.state={
      Id:"",
      Picture:"./images/React.jpg",
    Title:"Tiltle",
    Duration:"Duration",
    Summary:"Summary",
    Courses:[]
  }
  }
onSubmit=fields=>{
  console.log(":", fields);
}
  
componentDidMount() {
  fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((data) => {
    this.setState({ Courses: data })
  })
  .catch(console.log)
}

  render() {
    const {
      username, password
    }=this.props;
 
    
   // const Courselist = ({Courses }) => {
      return (
        <div>
        <CourseHeader />
      <div class="site-section courses-entry-wrap"   data-aos-delay="100">
      <div class="owl-carousel3 col-12 nonloop-block-14">

      <div class="row">
    <Course />
    <Course/>
    <Course/>
    </div>
    
 </div>
 

 
</div>
 
</div>
          

  )

    }
         }
//}

export default CoursesList;
