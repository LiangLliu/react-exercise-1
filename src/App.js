import React, { Component } from 'react';
import UserInfo from './components/userinfo/UserInfo';
import AboutMe from './components/aboutMe';
import './App.scss';
// import EduInfo from './components/eduInfo/eduInfo';

const data = {
  name: 'Kamil',
  age: 24,
  major: 'CV',
  aboutMe:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, non, dolorem, cumque distinctio magni quam expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.',
  education: [
    {
      year: 1990,
      title: 'I was born in Katowice',
      detail:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolores iste dolore est aut modi.',
    },
    {
      year: 2005,
      title: 'Secondary school specializing in artistic',
      detail:
        'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
    },
    {
      year: 2009,
      title: 'First level graduation in Graphic Design',
      detail:
        'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat.',
    },
    {
      year: 2012,
      title: 'Second level graduation in Graphic Design',
      detail: 'Ducimus, aliquam tempore autem itaque et accusantium!',
    },
  ],
};

class App extends Component {
  render() {
    return (
      <main className="app">
        <UserInfo name={data.name} />
        <AboutMe context={data.aboutMe} />
      </main>
    );
  }
}

export default App;
