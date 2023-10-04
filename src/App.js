import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Main from './Main';

function App() {
  const [darkMode, setDarkMode] = React.useState(false)

  function toggleDarkMode() {
    setDarkMode(prevDarkMode => !prevDarkMode)
  }

  return (
    <div className="App">
      <Navbar 
        darkMode={darkMode} 
        onFlip={toggleDarkMode} 
      />
      <Main darkMode={darkMode}/>
    </div>
  );
}

export default App;
