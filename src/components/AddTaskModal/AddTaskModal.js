import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import "./AddTaskModal.css";

import { addTask } from "../../actions/tasksActions";
import Button from "../Button/Button";

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      category: props.categories[0]
    };
    this.addTask = this.addTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addTask = () => {
    this.props.handleToggle();
    this.props.dispatch(addTask(this.state));
    this.setState({ text: "", categories: this.props.categories[0] });
  };

  handleInputChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { handleToggle, categories } = this.props;

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
      <div className="modal">
        <section className="modal-main">
          <p>Create your new task</p>
          <div>
            <label>
              Description:
              <input
                type="text"
                value={this.state.text}
                onChange={e => this.handleInputChange(e)}
                name="text"
                required
              />
            </label>
            <br />
            <label>
              Category:
              <select
                value={this.state.category}
                onChange={e => this.handleInputChange(e)}
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
              <Button
                text="Close"
                action={handleToggle}
                className="butt gray"
              />
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

AddTaskModal.propTypes = {
  children: PropTypes.node.isRequired
};
