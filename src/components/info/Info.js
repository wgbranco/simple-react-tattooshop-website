import React, { Component } from 'react';
import Map from '../map/Map';
import './Info.css';

class Info extends Component {
  render() {
    return (
      <section id={this.props.sectionId} className='Info'>
        <div className='container'>
          <Map/>
        </div>
      </section>
    );
  }
}

export default Info;
