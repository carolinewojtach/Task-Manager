import React, { Component } from "react";
import { connect } from "react-redux";

import "./BoardNav.css";

class BoardNav extends Component {
  render() {
    return (
      <div className="row category-nav">
        <h5 className="title col-10">{this.props.catTitle}</h5>
        {/* <h5 className="title col-2">{numberOfTasks}</h5> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //   categories: state.categories.categories
});
export default connect(mapStateToProps)(BoardNav);
