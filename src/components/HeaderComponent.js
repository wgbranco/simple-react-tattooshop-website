import React, { Component } from 'react';
import NavBar from './NavBar';
import './HeaderComponent.css';

class HeaderComponent extends Component {

  render() {
    function TitleBar(props) {
      return (
        <div className="TitleBar">
          <h1>{props.title}</h1>
        </div>
      );
    }

    return (
      <header className="HeaderComponent">
        <TitleBar title={this.props.title}/>
        <NavBar options={this.props.navOptions}/>
      </header>
    );
  }
}

export default HeaderComponent;
