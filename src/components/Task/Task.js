import React, { Component } from "react";
import { connect } from "react-redux";

import "./Task.css";
import Button from "../Button/Button";
import {
  editTask,
  checkTaskDone,
  deleteTask
} from "../../actions/tasksActions";

class Task extends Component {
  editTask = id => {
    this.props.dispatch(editTask(id));
  };
  checkTaskDone = id => {
    console.log(id);
    this.props.dispatch(checkTaskDone(id));
  };
  deleteTask = id => {
    this.props.dispatch(deleteTask(id));
  };

  render() {
    const { text, id, status } = this.props;
    // console.log(text, id, status);
    return (
      <div className="task" key={id}>
        <div className="row">
          <div
            className="col-7"
            style={{
              textDecoration: status === "Done" ? "line-through" : "none"
            }}
          >
            {text}
            {status}
          </div>

          <Button id={id} type="fas fa-edit" action={() => this.editTask(id)} />
          <Button
            id={id}
            type="fas fa-check"
            action={() => this.checkTaskDone(id)}
          />
          <Button
            id={id}
            type="fas fa-times"
            action={() => this.deleteTask(id)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Task);
