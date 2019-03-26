import React, { Component } from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state = {
      students: []
    };
  };

  componentDidMount() {
    Axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({ students: res.data });
    }).catch(err => console.log("We have an error", err));
  };

  render() {
    let student = this.state.students.map((student, index) => {
      return(
        <Link to={`/student/${student.id}`} key={index}>
          <h3>{student.first_name} {student.last_name}</h3>
        </Link>
      )
    })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {student}
        <Link to="/"><button>Go Back</button></Link>
      </div>
    );
  };
};