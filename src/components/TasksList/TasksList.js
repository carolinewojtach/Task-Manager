import React, { Component } from "react";
import { connect } from "react-redux";

import Repeat from "react-repeat-component";
import Task from "../Task/Task";

class TasksList extends Component {
  render() {
    const { catTitle } = this.props;

    const tasks = this.props.tasksList.filter(
      task => task.category === catTitle
    );

    return (
      <div>
        <Repeat times={tasks.length} className="row">
          {i => (
            <Task
              key={tasks[i].id}
              id={tasks[i].id}
              text={tasks[i].text}
              category={tasks[i].category}
            />
          )}
        </Repeat>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasksList: state.tasks.tasksList
});
export default connect(mapStateToProps)(TasksList);
