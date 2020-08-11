import React, { Component } from 'react';

import './index.scss';

class AboutMe extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { context } = this.props;
    return (
      <section className="aboutMe">
        <h2>ABOUT ME</h2>
        <p>{context}</p>
      </section>
    );
  }
}

export default AboutMe;
