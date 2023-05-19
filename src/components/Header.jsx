import React, { useState } from 'react'
import {AiOutlineStar, AiOutlineQuestionCircle} from 'react-icons/ai'
import {RiFolderTransferLine, RiHistoryFill} from 'react-icons/ri'
import {MdOutlineCloudDone, MdOutlineInsertComment} from 'react-icons/md'
import {BiLock} from 'react-icons/bi'
import Dropdown from './Dropdown'


const Header = ({value, onValue, onShow}) => {
    console.log(value)

  return (
    <header className='header-section text-dark'>
        <div className="header-container">
            <div className="left">
                <div className="logo">
                    <img src="Images/google-docs.png" alt="docsLogo" />
                </div>
                <div className="header-toolbar">
                    <div className="document-title">
                        <input 
                            type="text" 
                            name="title" 
                            id="title" 
                            value={value} 
                            onChange={(e)=>{onValue(e.target.value)}} 
                        />
                        <div className="icons">
                            <AiOutlineStar className='icon' size={28} />
                            <RiFolderTransferLine className='icon' size={28} />
                            <MdOutlineCloudDone className='icon' size={28} />
                        </div>
                    </div>
                    <div className="document-options">
                        <Dropdown name={`File`} />
                        <Dropdown name={`Edit`} />
                        <Dropdown name={`Insert`} />
                        <Dropdown name={`Format`} />
                        <Dropdown name={`Tools`} />
                        <Dropdown name={`Extensions`} />
                        <Dropdown name={`Help`} />
                    </div>
                </div>
            </div>
            <div className="right">
                <RiHistoryFill className='icon2' size={35} />
                <MdOutlineInsertComment className='icon2' size={35} />
                <button onClick={()=>{onShow(true)}}>
                    <BiLock size={18} />  <span>Share</span>
                </button>
                <img src="Images/avatar.png" alt="avatar" />
            </div>
        </div>
        
    </header>
  )
}

export default Header