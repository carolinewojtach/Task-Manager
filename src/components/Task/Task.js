import React, { Component } from "react";
import { connect } from "react-redux";

import "./Task.css";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
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
    const { text, id, completed } = this.props;
    return (
      <div className="task" key={id}>
        <div className="row">
          <div
            className="col-7"
            style={{
              textDecoration: completed ? "line-through" : "none"
            }}
          >
            {text}
          </div>

          <ButtonIcon
            id={id}
            type="fas fa-edit btn-gray"
            action={() => this.editTask(id)}
          />
          <ButtonIcon
            id={id}
            type="fas fa-check btn-gray"
            action={() => this.checkTaskDone(id)}
          />
          <ButtonIcon
            id={id}
            type="fas fa-times btn-gray"
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
