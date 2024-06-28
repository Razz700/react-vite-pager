import React, { useState } from 'react'
import Form from './components/Form'
import MessageList from './components/MessageList'
import './App.css'

const App = () => {
 let [out,setout]=useState(false);
 const handleoutput=(data)=>{
setout(data);
 };
 
  return (
    <div className='app'>
    <div className="container">
      <div className="shape1"></div>
      <div className="shape2"></div>
     <Form output={handleoutput}/>
    </div>
    <MessageList check={out}/>
    </div>
  )
}

export default App