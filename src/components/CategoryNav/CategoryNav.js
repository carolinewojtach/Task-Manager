import React, { Component } from "react";
import { connect } from "react-redux";

import "./CategoryNav.css";

import Text from "../Text/Text";

class BoardNav extends Component {
  render() {
    return (
      <div className="category-nav">
        {/* <p className="title">{this.props.catTitle}</p> */}
        <Text className="title" text={this.props.catTitle} />
        {/* <h5 className="title col-2">{numberOfTasks}</h5> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   categories: state.categories.categories
});
export default connect(mapStateToProps)(BoardNav);
