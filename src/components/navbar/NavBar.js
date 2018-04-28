import React, { Component } from 'react';
import NavButton from '../nav-button/NavButton';
import './NavBar.css';

class NavBar extends Component {

  render() {

    const listOptions = this.props.options ?
      this.props.options.map(
        (option, index) => (
          <NavButton
            key={index}
            active={option.active}
            label={option.label}
            sectionId={option.sectionId}
          />
        )
      ) : [];

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
