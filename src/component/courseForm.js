import React, { Component } from 'react';

class CourseForm extends Component{
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} className="addCourseForm">
          <input type="text" className='addtext' value={this.props.current}  onChange={this.props.handleChange}/>
          <input type="submit" value="Add" className='addCourse'/>
        </form>
      </div>
    )
  }
}
export default CourseForm;
