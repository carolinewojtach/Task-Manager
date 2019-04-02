import React, { Component } from "react";
import { connect } from "react-redux";

import "./AddTaskModal.css";
import { addTask } from "../../actions/tasksActions";
import Button from "../Button/Button";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      default: {
        text: "",
        category: props.categories[0]
      },
      text: "",
      category: props.categories[0]
    };
    this.addTask = this.addTask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addTask = () => {
    this.props.handleClose();
    this.props.dispatch(addTask(this.state));
    this.setState({ text: "", categories: this.props.categories[0] });
  };

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { handleClose, show, categories } = this.props;
    const showHideClassName = show
      ? "modal display-block"
      : "modal display-none";

    const categoriesSelect = categories.length ? (
      categories.map(e => {
        return (
          <option key={e} name="category" value={e}>
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
            <label>
              Text:
              <input
                type="text"
                value={this.state.text}
                onChange={e => this.handleChange(e)}
                name="text"
              />
            </label>
            <label>
              Category:
              <select
                value={this.state.category}
                onChange={e => this.handleChange(e)}
                name="category"
              >
                {categoriesSelect}
              </select>
            </label>

            <div className="footer-modal">
              <Button
                text="Add Task"
                action={this.addTask}
                className="butt green"
              />
              <Button text="Close" action={handleClose} className="butt gray" />
            </div>
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
