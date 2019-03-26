import React, { Component } from "react";

import TasksList from "../TasksList/TasksList";
import BoardNav from "../BoardNav/BoardNav";

import "./Category.css";

class Category extends Component {
  render() {
    const { catTitle } = this.props;
    return (
      <div className="category col-6 col-sm-6 col-md-4 col-lg-3">
        <BoardNav catTitle={catTitle} />
        <TasksList catTitle={catTitle} />
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//      categories: state.categories.categories
//   });
export default Category;
