import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(10)
//let counter=15 

const addValue=()=>{
 if(counter<20){
  //counter=counter+1
  setCounter(counter+1)
 }
  
}
const rmvValue=()=>{
 if(counter>0){
  setCounter(counter-1)
 }
}
  return (
    <>
     <h1>Chai aur react</h1>
     <h3>Counter value:{counter}</h3>

     <button onClick={addValue}>Add Value</button>
     <button onClick={rmvValue}>Rmv Value</button>
     <p>footer:{counter}</p>
    </>
  )
}

export default App
