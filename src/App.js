import React from 'react';
import './App.css';
import {useState} from 'react';
import {projects} from './components/projects';
import Portfolio from './components/Portfolio';
import Toolbar from './components/Toolbar';

function App() {
const [arrProjects, SetArrProjects] = useState(projects);
const onSelectFilter = (selected) => {
  const newArrProjects = projects.filter(el => el.category === selected || selected === "All" );
  SetArrProjects(newArrProjects);
};

  return (
    <div className='App'>
     <Toolbar onSelectFilter = {onSelectFilter}/>
    <Portfolio arrProjects = {arrProjects}/>
    </div>
  );
}

export default App;
