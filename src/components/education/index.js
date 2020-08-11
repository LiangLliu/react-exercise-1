import React, { Component } from 'react';
import EduInfo from '../eduInfo/eduInfo';

import './index.scss';

class Education extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { eduList } = this.props;
    return (
      <section className="education">
        <h2>EDUCATION</h2>
        <section className="content">
          {eduList &&
            // eslint-disable-next-line react/prop-types
            eduList.map((item) => <EduInfo {...item} key={item.id} />)}
        </section>
      </section>
    );
  }
}

export default Education;
