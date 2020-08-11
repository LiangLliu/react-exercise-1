import React, { Component } from 'react';

import './index.scss';
import avatar from '../../assets/avatar.jpg';

class UserInfo extends Component {
  render() {
    // eslint-disable-next-line react/prop-types
    const { name } = this.props;
    return (
      <section className="userInfo">
        <img src={avatar} />
        <h1>HELLO,</h1>
        <h2>MY NAME {name},</h2>
      </section>
    );
  }
}

export default UserInfo;
