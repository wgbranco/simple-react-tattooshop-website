import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {

  render() {
    const scrollToElement = sectionId => e => {
      let element = document.getElementById(sectionId);
      element.scrollIntoView({ block: 'start', behavior: 'smooth' });
    };

    const listOptions = this.props.options ?
      this.props.options.map(
        (option, index) => (
          <NavButton
            key={index}
            label={option.label}
            sectionId={option.sectionId}
          />
        )
      ) : [];

    function NavButton(props) {
      return (
        <div
          onClick={scrollToElement(props.sectionId)}>
          {props.label}
        </div>
      );
    }

    return (
      <div className="NavBar">
        <nav>
          {listOptions}
        </nav>
      </div>
    );
  }
}

export default NavBar;
