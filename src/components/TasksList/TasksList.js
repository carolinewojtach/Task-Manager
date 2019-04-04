import React, { Component } from "react";
import { connect } from "react-redux";

import "./TasksList.css";

import Repeat from "react-repeat-component";
import Task from "../Task/Task";

class TasksList extends Component {
  render() {
    const { catTitle } = this.props;

    const tasks = this.props.tasks.filter(task => task.category === catTitle);

    return (
      <Repeat times={tasks.length} className="tasks-list">
        {i => (
          <Task
            key={tasks[i].id}
            id={tasks[i].id}
            text={tasks[i].text}
            category={tasks[i].category}
            completed={tasks[i].completed}
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
