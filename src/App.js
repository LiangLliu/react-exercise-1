import React, { Component } from 'react';
import UserInfo from './components/userinfo/UserInfo';
import './App.scss';
// import EduInfo from './components/eduInfo/eduInfo';

// const data = [
//   {
//     time: '1990',
//     title: 'I was born in Katowice',
//     content:
//       'Lorem ipsum dolor sit amet, consectetur adipisicing elit Sapiente, exercitation, totam, dolores iste dolore est aut modi.',
//   },
// ];

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserInfo name="KMAIL" />
      </main>
    );
  }
}

export default App;
