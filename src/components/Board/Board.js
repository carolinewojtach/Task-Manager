import React, { Component } from "react";
import { connect } from "react-redux";
import Category from "../Category/Category";

import Repeat from "react-repeat-component";

import "./Board.css";

class Board extends Component {
  render() {
    const { categories } = this.props;

    return (
      <div className="container">
        <Repeat times={categories.length} className="row">
          {i => <Category id={i} key={i} catTitle={categories[i]} />}
        </Repeat>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.categories
});
export default connect(mapStateToProps)(Board);
