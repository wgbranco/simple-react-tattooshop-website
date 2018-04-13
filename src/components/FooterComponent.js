import React, { Component } from 'react';
import NavBar from './NavBar';
import './FooterComponent.css';

class FooterComponent extends Component {
  // TODO: Add links to facebook & instagram pages
  render() {
    function Spacer(props) {
      return (
        <div className='Spacer'></div>
      );
    }

    return (
      <div className="FooterComponent">
        <NavBar options={[]}/>
        <Spacer />
      </div>
    );
  }
}

export default FooterComponent;
