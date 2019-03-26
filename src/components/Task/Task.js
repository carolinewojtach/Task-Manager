import React, { Component } from "react";

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
    this.props.dispatch(checkTaskDone(id));
  };
  deleteTask = id => {
    this.props.dispatch(deleteTask(id));
  };

  render() {
    const { text, id } = this.props;
    return (
      <div className="task" key={id}>
        <div className="row">
          <div className="col-7">{text}</div>
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
export default Task;
