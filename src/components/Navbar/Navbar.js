import React, { Component } from "react";
import { connect } from "react-redux";

import "./Navbar.css";

import ButtonIcon from "../ButtonIcon/ButtonIcon";
import AddTaskModal from "../AddTaskModal/AddTaskModal";
import Modal from "../Modal/Modal";

class Navbar extends Component {
  state = { show: false };

  toggleAddTaskModal = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { tasks } = this.props;
    return (
      // <div className="navbar navbar-expand-md navbar-dark bg-light sticky-top">
      <div className="header">
        <div className="head-left">
          <p>Task Manager</p>
        </div>
        <div className="head-right">
          <p>{tasks.length}</p>

          <ButtonIcon
            action={this.toggleAddTaskModal}
            type="fas fa-plus btn-black"
          />
        </div>

        <Modal>
          {this.state.show ? (
            <AddTaskModal handleToggle={this.toggleAddTaskModal} />
          ) : null}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Navbar);
