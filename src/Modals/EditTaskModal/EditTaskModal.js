import React, { Component } from "react";
import { connect } from "react-redux";

import Text from "../../components/Text/Text";
import { editTask } from "../../actions/tasksActions";
import Button from "../../components/Button/Button";

class EditTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      text: this.props.text,
      category: this.props.category
    };
    this.changeTask = this.changeTask.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.text = React.createRef();
    this.category = React.createRef();
  }

  changeTask = () => {
    this.props.handleToggle();
    this.props.editTask(this.state);
    this.setState({ text: "", categories: this.props.categories[0] });
  };

  handleInputChange = e => {
    e.preventDefault();
    const name = e.target.name;
    this.setState({ [name]: this[name].current.value });
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
          <Text className="title black" text="Edit task" />
          <div>
            <form>
              <div className="form-group">
                <label>Description:</label>
                <input
                  className="form-input"
                  type="text"
                  value={this.state.text}
                  ref={this.text}
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
                  ref={this.category}
                  onChange={e => this.handleInputChange(e)}
                  name="category"
                >
                  {categoriesSelect}
                </select>
              </div>
            </form>

            <div className="footer-modal">
              <Button
                text="Save"
                action={this.changeTask}
                className="butt green"
              />
              <Button
                text="Cancel"
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
  categories: state.categories,
  tasks: state.tasks
});

const mapDispatchToProps = {
  editTask
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditTaskModal);
