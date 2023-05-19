import React, { useEffect, useState } from 'react'
import {
    AiFillProfile,
    AiOutlineMail,
    AiOutlineDownload
} from 'react-icons/ai'
import {RiUserAddLine} from 'react-icons/ri'
import {
    IoMdFolderOpen,
    IoMdCopy,
} from 'react-icons/io'

const Dropdown = ({name}) => {

    const [showList, setShowList] = useState(false)

    useEffect(() => {
        const dropList = document.querySelector('.dropdown')

        const closeList = (e) => {
            if (!dropList.contains(e.target)) {
                setShowList(false)
            }
        }

            document.addEventListener("mousedown", closeList)

            return () => {
                document.removeEventListener("mousedown", closeList)
            }
    },[])

  return (
    <div className="item">
        <span 
            className="item-title"
            onClick={()=>{setShowList(!showList)}}
        >
            {name}
        </span>
        <ul role='list' className={showList?'dropdown dropdown-active':'dropdown'}>
            <li className='option'><AiFillProfile size={20} /> <span>New</span></li>
            <li className='option'><IoMdFolderOpen size={20} /> <span>Open</span></li>
            <li className='option'><IoMdCopy size={20} /> <span>Make copy</span></li>
            <hr />
            <li className='option'><RiUserAddLine size={20} /> <span>Share</span></li>
            <li className='option'><AiOutlineMail size={20} /> <span>Email</span></li>
            <li className='option'><AiOutlineDownload size={20} /> <span>Download</span></li>
        </ul>
    </div>
  )
}

export default Dropdown