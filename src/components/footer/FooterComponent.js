import React, { Component } from 'react';
import NavBar from '../navbar/NavBar';
import './FooterComponent.css';

class FooterComponent extends Component {

  constructor(props) {
    super(props);

    this.prevScrollpos = window.pageYOffset;
    this.state = {BottomMenu: ''};
    window.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    let currentScrollPos = window.pageYOffset;

    // if scroll down
    let newState = (this.prevScrollpos > currentScrollPos)
                    ? {BottomMenu: ''}
                    : {BottomMenu: 'gone'};

    requestAnimationFrame(() => {
      this.setState(newState);
    });

    this.prevScrollpos = currentScrollPos;
  };

  // TODO: Add links to facebook & instagram pages
  render() {
    function Spacer(props) {
      return (
        <div className='Spacer'></div>
      );
    }

    return (
      <footer className="FooterComponent">
        <div id="BottomMenu" className={this.state.BottomMenu}>
          <NavBar options={[]}/>
        </div>

        <div className="Hline"></div>

        <Spacer />
      </footer>
    );
  }
}

export default FooterComponent;
