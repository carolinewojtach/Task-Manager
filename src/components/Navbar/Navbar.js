import React, { Component } from "react";
import { connect } from "react-redux";
import "./Navbar.css";

import { addTask } from "../../actions/tasksActions";
import Button from "../Button/Button";
import AddTaskModal from "../AddTaskModal/AddTaskModal";

class Navbar extends Component {
  state = { show: false };

  showAddTaskModal = () => {
    this.setState({ show: true });
    this.props.dispatch(
      addTask({
        id: `id-${this.randomId()}`,
        text: "new task",
        category: "Work",
        status: true
      })
    );
    console.log(this.props.tasks);
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  randomId = () => {
    return Math.random()
      .toString(36)
      .substr(2, 16);
  };
  alert = () => {
    alert("alert test");
  };
  render() {
    const { tasks, categories } = this.props;
    const categoriesSelect = categories.length ? (
      categories.map(e => {
        return <option value="p">e</option>;
      })
    ) : (
      <p>"No categories"</p>
    );
    // let input;
    return (
      <div className="navbar navbar-expand-md navbar-dark bg-light sticky-top">
        <div className="container-fluid">
          <div className="col-10">
            <h3>Task Manager</h3>
          </div>
          <div className="row">
            {tasks.length}
            <Button action={this.showAddTaskModal} type="fas fa-plus" />
          </div>
        </div>

        <div>
          <AddTaskModal show={this.state.show} handleClose={this.hideModal}>
            <p>Create your new task</p>
            <div>
              <form
                onSubmit={() => this.alert()}
                // onSubmit={e => {
                //   e.preventDefault();
                //   if (!input.value.trim()) {
                //     return;
                //   }
                //   this.props.dispatch(addTask(input.value));
                //   input.value = "";
                // }}
              >
                {/* <input ref={node => (input = node)} /> */}
                <p>Text: </p>
                <input type="text" />
                <p>Category:</p>
                <select name="categories">
                  {categoriesSelect}
                  {/* <option value="School">School</option>
                  <option value="Work">Work</option> */}
                </select>

                <button type="submit">Add Task</button>
              </form>
            </div>
          </AddTaskModal>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks,
  categories: state.categories.categories
});

export default connect(mapStateToProps)(Navbar);
