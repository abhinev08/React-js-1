//complex state 
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
const App = () => {
//   const [clicks, setClicks] = useState({
//     left: 0, right: 0
//   })

//   const handleLeftClick = () =>
//   setClicks({ ...clicks, left: clicks.left + 1 })

// const handleRightClick = () =>
//   setClicks({ ...clicks, right: clicks.right + 1 })
  
//   return (
//     <div>
//       {clicks.left}
//       <button onClick={handleLeftClick}>left</button>
//       <button onClick={handleRightClick}>right</button>
//       {clicks.right}
//     </div>
  // 
  return(<B />)


}
  
  export default App;

// when left click is clicked , the following fuction is called 

// const handleLeftClick = () => {
//   const newClicks = { 
//     left: clicks.left + 1, 
//     right: clicks.right 
//   }
//   setClicks(newClicks)
// }

// new state of application
// {
//   left: clicks.left + 1,
//   right: clicks.right
// }


// Handling Arrays

const A = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {right}
      <p>{allClicks.join(' ')}</p>
    </div>
  )
}


// conditional Rendering

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div style={{ border: '2px solid red' }}>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const B = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left' />
      <Button handleClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
      <div style={{ border: '2px solid red' }}> hi </div>
    </div>
  )
}