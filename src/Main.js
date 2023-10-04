import React from 'react'

export default function Main(props) {
    
  return (
    <main className={props.darkMode ? "darkMode" : ""}>
        <h1 className='Topic'>Fun facts about this Life</h1>
        <ul>
            <li>spaLaughter is contagious, even across languages</li>
            <li>Your taste buds change every two weeks.</li>
            <li>Your brain generates more electrical impulses than all the telephones in the world.</li>
            <li>You share 50% of your DNA with bananas.</li>
            <li>Dreams are forgotten within 10 minutes of waking.</li>
            <li>Smiling can boost your mood instantly.</li>
        </ul>
    </main>
    
    
  )
}
