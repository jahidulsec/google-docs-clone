import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

const Sidebar = ({activeClass}) => {
  return (
    <section className={`sidebar-section ${activeClass}`}>
        <div className="sidebar-icons">
            <a href="https://calendar.google.com/calendar/u/0/r">
                <img src="Images/google-calender.png" alt="calender" />
            </a>
            <a href="https://keep.google.com/u/0/">
                <img src="Images/google-keep.png" alt="keep" />
            </a>
            <a href="#">
                <img src="Images/google-task.png" alt="task" />
            </a>
            <a href="https://contacts.google.com/u/0/?hl=en">
                <img src="Images/google-contact.png" alt="contact" />
            </a>
            <a href="https://www.google.com/maps">
                <img src="Images/google-maps.png" alt="maps" />
            </a>
            <hr />
            <AiOutlinePlus className='icon' size={28}/>
        </div>
    </section>
  )
}

export default Sidebar