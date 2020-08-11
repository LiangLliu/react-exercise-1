import React, { Component } from 'react';
import './eduInfo.scss';

class EduInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // eslint-disable-next-line react/prop-types
    const { time, title, content } = this.props;
    return (
      <section className="warp">
        <h4 id="time">{time}</h4>
        <article className="article">
          <h3>{title}</h3>
          <p id="content">{content}</p>
        </article>
      </section>
    );
  }
}

export default EduInfo;
