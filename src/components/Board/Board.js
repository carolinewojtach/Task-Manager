import React, { Component } from "react";
import { connect } from "react-redux";
import Repeat from "react-repeat-component";

import "./Board.css";

import Category from "../Category/Category";

class Board extends Component {
  render() {
    const { categories } = this.props;

    return (
      <Repeat times={categories.length} className="board">
        {i => <Category id={i} key={i} catTitle={categories[i]} />}
      </Repeat>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories
});
export default connect(mapStateToProps)(Board);
