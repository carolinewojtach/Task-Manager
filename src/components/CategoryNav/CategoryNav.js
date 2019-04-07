import React, { Component } from "react";
import { connect } from "react-redux";

import "./CategoryNav.css";

import Text from "../Text/Text";

class BoardNav extends Component {
  render() {
    const { catTitle, tasks } = this.props;
    const numberOfTasks = tasks.filter(task => task.category === catTitle)
      .length;
    return (
      <div className="category-nav">
        <Text className="title" text={catTitle} />
        <Text className="title" text={numberOfTasks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(BoardNav);
