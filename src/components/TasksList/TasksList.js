import React, { Component } from "react";
import { connect } from "react-redux";

import "./TasksList.css";

import Repeat from "react-repeat-component";
import Task from "../Task/Task";

class TasksList extends Component {
  render() {
    const { catTitle, tasks } = this.props;

    const tasksList = tasks.filter(task => task.category === catTitle);

    return (
      <Repeat times={tasksList.length} className="tasks-list">
        {i => (
          <Task
            key={tasksList[i].id}
            id={tasksList[i].id}
            text={tasksList[i].text}
            category={tasksList[i].category}
            completed={tasksList[i].completed}
          />
        )}
      </Repeat>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});
export default connect(mapStateToProps)(TasksList);
