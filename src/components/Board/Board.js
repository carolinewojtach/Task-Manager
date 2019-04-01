import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../Category/Category";

import Repeat from "react-repeat-component";

import "./Board.css";

class Board extends Component {
  render() {
    const { categories } = this.props;

    return (
      <Repeat times={categories.length}>
        {i => <Category id={i} key={i} catTitle={categories[i]} />}
      </Repeat>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});
export default connect(mapStateToProps)(Board);
