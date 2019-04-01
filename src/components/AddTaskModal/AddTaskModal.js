import React, { Component } from "react";
import { connect } from "react-redux";

import "./AddTaskModal.css";
import { addTask } from "../../actions/tasksActions";
import Button from "../Button/Button";

class AddTaskModal extends Component {
  randomId = () => {
    return Math.random()
      .toString(36)
      .substr(2, 16);
  };

  addTask = () => {
    this.props.dispatch(
      addTask({
        id: `id-${this.randomId()}`,
        text: "new task",
        category: "Work",
        status: true
      })
    );
  };

  render() {
    const { handleClose, show, categories } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

    const categoriesSelect = categories.length ? (
      categories.map(e => {
        return (
          <option key={e} value="category">
            {e}
          </option>
        );
      })
    ) : (
      <p>"No categories"</p>
    );

    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <p>Create your new task</p>
          <div>
            <form onSubmit={() => this.addTask()}>
              <p>
                Text:
                <input type="text" />
              </p>
              <p>
                Category:
                <select name="categories">{categoriesSelect}</select>
              </p>

              <div className="footer-modal">
                <Button type="submit" text="Add Task" className="butt green" />
                <Button
                  action={handleClose}
                  type="button"
                  text="Close"
                  className="butt gray"
                />
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});

export default connect(mapStateToProps)(AddTaskModal);
