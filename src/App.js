import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'
import Counter from './Counter'
import Todos from './Todos'
import Users from './Users'


class  App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Welcome name="Varma" year={2020} password="12334324"/>
          <Welcome name="Ram" year={2025} password="3423432"/>
        </header>
        <Users/>
      </div>
    )
  }
}

export default App;
