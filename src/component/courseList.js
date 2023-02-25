import React, { Component } from 'react';


class CourseList extends Component{
    state = {
        isEdit: false,
    }
    renderForm = () => {
        return (
            <li className='course'>
                <span className='skill'>{this.props.course}</span>
                <button className='editButton' onClick={() =>  this.toggleUpdate()}>Update</button>
                <button className='deleteButton' onClick={ () => this.props.deleteCourse(this.props.index)}>Delete Course</button>
            </li>
        )
    }
    toggleUpdate = () => {
        let isEdit = this.state.isEdit;
        this.setState({
            isEdit: !isEdit,
        })
    }

    updateCourseItems = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value);
        this.toggleUpdate();
    }
    UpdateForm = () => {
        return (
            <form onSubmit={this.updateCourseItems} className="updateForm">
                <input type="text" className='updateFormText' ref={(v)=>{this.input=v}} defaultValue={this.props.course} />
                <input type="submit" className='updateFormButton' value="Update" />
            </form>
        )
    }
    render() {
        let { isEdit } = this.state;
    return (
        <>
            {isEdit? this.UpdateForm() : this.renderForm() }
        </>
    )
    }
}
export default CourseList;

