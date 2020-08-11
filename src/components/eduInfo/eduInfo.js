import React, { Component } from 'react';
import './eduInfo.css';

class EduInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // eslint-disable-next-line react/prop-types
    const { time, title, content } = this.props.info;
    return (
      <div className="warp">
        <aside>
          <label id="time">{time}</label>
        </aside>

        <article id="article">
          <h2>{title}</h2>
          <p id="content">{content}</p>
        </article>
      </div>
    );
  }
}

export default EduInfo;
