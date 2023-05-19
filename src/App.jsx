import React, { useState } from 'react'
import TextEditor from './components/TextEditor'
import './App.css'
import Header from './components/Header'
import Modal from './components/Modal'
import Sidebar from './components/Sidebar'
import {BiChevronRight} from 'react-icons/bi'


const App = () => {
  // value for recording document name
  const [value, setValue] = useState('Untitled document')
  
  // show is for adding condition to show Modal
  const [show, setShow] = useState(false)

  // active sidebar
  const [active,setActive] = useState(true)


  return (
    <div className='app'>
      <Header 
        value={value} 
        onValue={setValue} 
        onShow={setShow} 
      />
      <main 
        className='main'
      >
        <TextEditor />
        <Sidebar 
          activeClass={!active && 'hide-sidebar'}
        />
      </main>
      <Modal 
        show={show} 
        value={value} 
        onShow={setShow} 
      />
      {/* hide side bar */}
      <span onClick={()=>{setActive(!active)}}>
        <BiChevronRight 
          className = {active ? 'hide-sidebar-btn' : 'hide-sidebar-btn rotate-icon'} 
          size={35} 
        />
      </span>

    </div>
  )
}

export default App