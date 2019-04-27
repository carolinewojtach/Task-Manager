import React, { Component } from "react";
import { connect } from "react-redux";

import "./Task.css";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import Text from "../Text/Text";
import EditTaskModal from "../../Modals/EditTaskModal/EditTaskModal";
import Modal from "../../Modals/Modal/Modal";

import {
  editTask,
  checkTaskDone,
  deleteTask
} from "../../actions/tasksActions";

class Task extends Component {
  state = { show: false };

  toggleEditTaskModal = () => {
    this.setState({ show: !this.state.show });
  };

  checkTaskDone = id => {
    this.props.dispatch(checkTaskDone(id));
  };
  deleteTask = id => {
    this.props.dispatch(deleteTask(id));
  };

  render() {
    const { text, id, completed, category } = this.props;

    const completedClassName = completed
      ? "task-completed"
      : "task-uncompleted";

    return (
      <div className="task" key={id}>
        <div className={completedClassName}>
          <Text text={text} className="task-text" />
        </div>
        <div className="tasks-buttons">
          <ButtonIcon
            id={id}
            type="fas fa-edit btn-gray"
            action={() => this.toggleEditTaskModal(id)}
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

        <Modal>
          {this.state.show ? (
            <EditTaskModal
              text={text}
              category={category}
              id={id}
              handleToggle={this.toggleEditTaskModal}
            />
          ) : null}
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(Task);
