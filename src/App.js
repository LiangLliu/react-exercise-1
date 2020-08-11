import React, { Component } from 'react';
import './App.scss';
import EduInfo from './components/eduInfo';

const data = [
  {
    time: '1990',
    title: 'I was born in Katowice',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit Sapiente, exercitation, totam, dolores iste dolore est aut modi.',
  },
];

class App extends Component {
  render() {
    return (
      <main className="app">
        {data.map((item) => {
          return <EduInfo info={item} key={String.toString} />;
        })}
      </main>
    );
  }
}

export default App;
