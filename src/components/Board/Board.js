import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../Category/Category";

class Board extends Component {
  render() {
    const categories = this.props.categories.map(category => (
      <Category category={category} key={category.id} />
    ));

    return <div>{categories}</div>;
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  tasksList: state.tasks.tasksList
});
export default connect(mapStateToProps)(Board);
