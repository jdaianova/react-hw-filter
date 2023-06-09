import React from 'react';
import './App.css';
import { projects } from './components/projects';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div className='App'>
      <Portfolio projects={projects} />
    </div>
  );
}

export default App;