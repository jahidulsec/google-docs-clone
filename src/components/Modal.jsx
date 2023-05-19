import React, { useEffect, useState } from 'react'
import {FiSettings, FiLink2} from 'react-icons/fi'
import {
    AiOutlineQuestionCircle, 
    AiOutlineLock, 
    AiFillCaretDown
} from 'react-icons/ai'

const Modal = ({show, value, onShow}) => {

    const [copyStatus, setCopyStatus ] = useState(false)

    useEffect(()=> {
        const modal = document.getElementById("modal")
        const doneBtn = document.querySelector('#done')
        const copyBtn = document.querySelector('.copy-link')

        modal.removeAttribute('open')
        if (show){
            modal.showModal()
        }
        const closeModal = () => {
            modal.close()
            onShow(false)
        }

        doneBtn.addEventListener("click", closeModal)

        return () => {
            doneBtn.removeEventListener('click', closeModal)
        }

    },[show])


    // set timer for turn off link copied status after 5000ms
    const timer = setTimeout(() => {
        setCopyStatus(false)
    }, 5000);

    const handleLink = () => {
        setCopyStatus(true)
        timer()
    }


  return (
    <dialog 
        className='modal' 
        id='modal'
    >
      <div className="active-modal">
         <div className="header">
            <h1>Share "{value}"</h1>
            <div className="modal-icons">
                <AiOutlineQuestionCircle className='modal-header-icon' size={20} />
                <FiSettings className='modal-header-icon' size={20} />
            </div>
            </div>
            <input type="text" name="search" id="search" placeholder='Add people and groups' />
            <div className="owner">
                <h2>People with access</h2>
                <div className='owner-desc'>     
                    <div className="owner-info">
                        <img style={{width: `32px`}} src="Images/avatar.png" alt="avatar" />
                        <div className="info">
                            <h3>Your Name (you) </h3>
                            <h4>yourname@gmail.com</h4>
                        </div>
                    </div>
                    <span className="status">Owner</span>
                </div>
            </div>
            <div className="access">
                <h2>General access</h2>
                <div className='access-info'>
                    <AiOutlineLock className='access-icon' size={30} />
                    <div className="info">
                        <h3>Restricted <AiFillCaretDown /></h3>
                        <p>Only people with access can open with the link</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button className='copy-link' onClick={() => {handleLink()}}>
                    <FiLink2 /> Copy link
                </button>
                <button 
                    className='done'
                    id='done'
                >
                    Done
                </button>
            </div> 
            <div className={copyStatus ? "copy-status copy-status-active":"copy-status"}>
                <span>
                    Link Copied
                </span>
            </div>
         </div>
    </dialog>
  )
}

export default Modal