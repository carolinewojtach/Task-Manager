import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";

import ButtonIcon from "../ButtonIcon/ButtonIcon";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

class Navbar extends Component {
  state = { show: false };

  showAddTaskModal = () => {
    this.setState({ show: true });
  };

  hideAddTaskModal = () => {
    this.setState({ show: false });
  };

  render() {
    const { tasks } = this.props;

    return (
      <div className="navbar navbar-expand-md navbar-dark bg-light sticky-top">
        <div className="container-fluid">
          <div className="col-10">
            <h3>Task Manager</h3>
          </div>
          <div className="row">
            {tasks.length}
            <ButtonIcon action={this.showAddTaskModal} type="fas fa-plus" />
          </div>
        </div>

        <div>
          <AddTaskModal
            show={this.state.show}
            handleClose={this.hideAddTaskModal}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Navbar);
