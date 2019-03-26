import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";
import { addTask } from "../../actions/tasksActions";
import Button from "../Button/Button";
class Navbar extends Component {
  addTask = () => {
    this.props.dispatch(
      addTask({
        id: 5,
        title: "new task",
        text: "taaask",
        category: "Active"
      })
    );
  };

  render() {
    const { taskCounter } = this.props;

    return (
      <div className="navbar navbar-expand-md navbar-dark bg-light sticky-top">
        <div className="container-fluid">
          <div className="col-10">
            <h3>Task Manager</h3>
          </div>
          <div className="row">
            {taskCounter}
            <Button action={this.addTask} type="fas fa-plus" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  taskCounter: state.tasks.taskCounter
});

export default connect(mapStateToProps)(Navbar);
