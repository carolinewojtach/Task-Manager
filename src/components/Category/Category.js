import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    const tasks = this.props.tasksList.map(task => <div>{task.title}</div>);
    return (
      <div>
        {this.props.category}
        {tasks}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasksList: state.tasks.tasksList
});
export default connect(mapStateToProps)(Category);
