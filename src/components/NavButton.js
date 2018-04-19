import React, { Component } from 'react';
import './NavButton.css';

class NavButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      buttonClasses: 'NavButton',
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log('componentWillReceiveProps');
    this.state.buttonClasses = nextProps.active
    ? 'NavButton active'
    : 'NavButton';
  }

  render() {
    const scrollToElement = sectionId => e => {
      let element = document.getElementById(sectionId);
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    return (
      <div
        className={this.state.buttonClasses}
        onClick={scrollToElement(this.props.sectionId)}>
        {this.props.label}
      </div>
    );
  }

}

export default NavButton;
