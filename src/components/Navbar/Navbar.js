import React, { Component } from "react";
import { connect } from "react-redux";

import "./Navbar.css";

import ButtonIcon from "../ButtonIcon/ButtonIcon";
import AddTaskModal from "../../Modals/AddTaskModal/AddTaskModal";
import Modal from "../../Modals/Modal/Modal";

import Text from "../Text/Text";

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
          <Text className="title black" text={tasks.length} />
          <div className="icon-plus">
            <ButtonIcon
              action={this.toggleAddTaskModal}
              type="fas fa-plus btn-black"
            />
          </div>
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
