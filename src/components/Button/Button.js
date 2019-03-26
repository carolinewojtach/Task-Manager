import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const { type, id, action } = this.props;

    return (
      <div className="col-1 icon">
        <i className={type} key={id} onClick={() => action()} />
      </div>
    );
  }
}
export default Button;
