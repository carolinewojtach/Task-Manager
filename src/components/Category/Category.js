import React, { Component } from "react";

import TasksList from "../TasksList/TasksList";
import CategoryNav from "../CategoryNav/CategoryNav";

import "./Category.css";

class Category extends Component {
  render() {
    const { catTitle } = this.props;
    return (
      <div>
        <div className="category">
          <CategoryNav catTitle={catTitle} />
          <TasksList catTitle={catTitle} />
        </div>
      </div>
    );
  }
}

export default Category;
