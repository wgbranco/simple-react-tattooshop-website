import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import './HeaderComponent.css';

class HeaderComponent extends Component {

  constructor(props) {
    super(props);

    this.prevScrollpos = window.pageYOffset;
    this.state = {TopMenu: ''};
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    let currentScrollPos = window.pageYOffset;
    // if scroll down
    let newState = (this.prevScrollpos > currentScrollPos)
                    ? {TopMenu: ''}
                    : {TopMenu: 'gone'};

    requestAnimationFrame(() => {
      this.setState(newState);
    });

    this.prevScrollpos = currentScrollPos;
  };

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

        <div className="Hline"></div>

        <div id="TopMenu" className={this.state.TopMenu}>
          <NavBar options={this.props.navOptions}/>
        </div>
      </header>
    );
  }
}

export default HeaderComponent;
