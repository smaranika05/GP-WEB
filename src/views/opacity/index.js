import React, { Component, ReactDOM } from "react";

import "./index.scss";

const activeFromPx = 20;
const activeToPx = 200;

class ScrollItem extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
    //this.handleScroll();
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  wrapRef = React.createRef();

  handleScroll = () => {
    const { isActive } = this.state;

    const { top } = this.wrapRef.getBoundingClientRect();

    if (top > activeFromPx && top < activeToPx) {
      setTimeout(() => this.setState({ isActive: true }), 1000);
    }
    // if ((top <= activeFromPx || top >= activeToPx) && this.state.isActive) {
    //   // this.setState({ isActive: false });
    // }
  };

  setWrapRef = (ref) => {
    this.wrapRef = ref;
  };

  render() {
    const { isActive } = this.state;
    return (
      <div
        className={`scroll-item ${isActive && "scroll-item--active"}`}
        ref={this.setWrapRef}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ScrollItem;
