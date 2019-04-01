import React, { Component } from "react";

import TasksList from "../TasksList/TasksList";
import CategoryNav from "../CategoryNav/CategoryNav";

import "./Category.css";

class Category extends Component {
  render() {
    const { catTitle } = this.props;
    return (
      <div className="category">
        <div className="category-container">
          <CategoryNav catTitle={catTitle} />
          <TasksList catTitle={catTitle} />
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => ({
//      categories: state.categories.categories
//   });
export default Category;
