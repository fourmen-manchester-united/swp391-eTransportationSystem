import React, { Component } from "react";
class Tab extends Component {
  onClick = () => {
    const { label, number, onClick } = this.props;
    onClick(label, number);
  };
  render() {
    const {
      onClick,
      props: { activeTab, label, number },
    } = this;
    let className = "";
    if (activeTab === label) {
      className += "active";
    }
    return (
      <li className={className}>
        <span className="nu" onClick={onClick} style={{ cursor: "pointer" }}>
          {number}
        </span>
        <span className="value"> {label}</span>
      </li>
    );
  }
}

export default Tab;
