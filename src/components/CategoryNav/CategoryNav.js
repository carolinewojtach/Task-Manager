import React, { Component } from "react";
import { connect } from "react-redux";

import "./CategoryNav.css";

class BoardNav extends Component {
  render() {
    return (
      <div className="category-nav">
        <p className="title col-10">{this.props.catTitle}</p>
        {/* <h5 className="title col-2">{numberOfTasks}</h5> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   categories: state.categories.categories
});
export default connect(mapStateToProps)(BoardNav);
