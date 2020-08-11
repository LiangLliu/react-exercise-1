import React, { Component } from 'react';
import UserInfo from './components/userinfo/UserInfo';
import AboutMe from './components/aboutMe';
import Education from './components/education';

import './App.scss';
import data from './data';

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserInfo name={data.name} />
        <AboutMe context={data.aboutMe} />
        <Education eduList={data.education} />
      </main>
    );
  }
}

export default App;
