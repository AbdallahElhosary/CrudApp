import React, { Component } from 'react';
import CourseForm from './component/courseForm';
import CourseList from './component/courseList';
import './App.css';

class App extends Component{
  state = {
    courses: [
      {name:"HTML"},
      {name:"CSS"},
      {name:"PHP"},
    ],
    current:"",
  }

  handleChange = (e) => {
    this.setState({
      current: e.target.value,
    })
  }
  componentDidUpdate = () => {
    let { courses } = this.state;
    if (courses.length === 0) {
      return true;
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    let { current } = this.state;
    let courses = this.state.courses;
    if (current !== "") {
      courses.push({ name: current });
      this.setState({
      courses: courses,
      current:""
    })
    }
  }
  

  deleteCourse = (index) => {
    let { courses } = this.state;
    courses.splice(index, 1);
    this.setState({
      courses:courses
    })
  }

  // Eddit Function

  editCourse = (index,value) => {
    let { courses } = this.state;
    let course = courses[index];
    course["name"] = value;
    this.setState({
      courses:courses,
    })
  }
  render() {

    let { courses } = this.state;
    let allCourses = courses.map((skill,index)=> {
      return <CourseList course={skill.name} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={ this.editCourse} />
    })
    return (
      <div className='container'> 
        <h1 className="header">Add Course</h1>
        <CourseForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} current={this.state.current} />
        <ul className='allSkills'>
          {this.componentDidUpdate()?<p className='empty'>There Is No Skills</p> :allCourses }
        </ul>
      </div>
    )
  }
}
export default App;
