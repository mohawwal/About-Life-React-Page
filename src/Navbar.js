import React from 'react'

export default function Navbar(props) {
   
  return (
    <header className={props.darkMode ? "darkMode" : ""}>
        <div className='navLogo'>
            <img className='logoIcon' src="/logo192.png" alt="React-icon" />
            <h1 className='header'>LifeFact</h1>
        </div>
        <div className='navMode'>
            <p className={props.darkMode ? "darkMode light" : "light"}>Light</p>
            <div className={props.darkMode ? "darkMode mode" : "mode"} onClick={props.onFlip}>
                <span className={props.darkMode ? "darkMode modeSwitch" : 'modeSwitch'}></span>
            </div>
            <p className={props.darkMode ? "darkMode dark" : "dark"}>Dark</p>
        </div>
    </header>
  )
}
