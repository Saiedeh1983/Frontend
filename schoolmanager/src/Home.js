import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';
import Header from './Component/Header';
import CoursesList from './Component/Courses/CoursesList';
import Login from './Component/Home/Login';

/* const propTypes={
  username: PropTypes.string.isRequired,
  password: propTypes.string.isRequired
};

const defaultProps={
  name: "Default",
  password:"pass"
} */
class Home extends Component {
  constructor(props){
super(props)
  
  this.state={
   menu:1,
   item:[]
  }
  }
swtcher(menuNum){
    if(menuNum==1) return (
            <Login menu={this.state.menu}/>
    )
    if(menuNum==2) return (
      <CoursesList menu={this.state.menu}/>
    )
}
  render() {
    const {menu}=this.state;
  return (<React.Fragment>
    <Header />
  {this.swtcher(this.state.menu)}
    </React.Fragment>   
          );
         }
}

export default Home;
