import React, { Component } from 'react';
import Map from './Map';
import VisibilitySensor from 'react-visibility-sensor';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <VisibilitySensor
        intervalCheck={false}
        scrollCheck={true}
        scrollDelay={150}
        onChange={this.props.onScroll}>

        <section id={this.props.sectionId} className='Info'>
          <div className='container'>
            <Map/>
          </div>
        </section>

      </VisibilitySensor>
    );
  }
}

export default Info;
