import React, { Component } from "react";
import { connect } from "react-redux";

import Text from "../../components/Text/Text";
import { addTask } from "../../actions/tasksActions";
import Button from "../../components/Button/Button";

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
          <Text className="title black" text="Create your new task" />
          <div>
            <form>
              <div className="form-group">
                <label>Description:</label>
                <input
                  className="form-input"
                  type="text"
                  value={this.state.text}
                  onChange={e => this.handleInputChange(e)}
                  name="text"
                  required
                />
              </div>

              <div className="form-group">
                <label>Category:</label>
                <select
                  className="form-input"
                  value={this.state.category}
                  onChange={e => this.handleInputChange(e)}
                  name="category"
                >
                  {categoriesSelect}
                </select>
              </div>
            </form>
          </div>
          <div className="footer-modal">
            <Button
              text="Add Task"
              action={this.addTask}
              className="butt green"
            />
            <Button text="Cancel" action={handleToggle} className="butt gray" />
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});

export default connect(mapStateToProps)(AddTaskModal);
