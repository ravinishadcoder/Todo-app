import logo from './logo.svg';
import './App.css';
import React from 'react';
import Todo from './components/Todo';
class App extends React.Component {
  render(){
    return (
      <div className="App">
       <Todo/>
      </div>
    );
  }
}

export default App;
