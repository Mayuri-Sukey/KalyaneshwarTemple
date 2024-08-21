import React, {useState} from 'react'
import { FaChevronDown } from "react-icons/fa";

const NavbarItems = ({item}) => {

  const [open, setOpen] = useState(false)
 


  if(item.children){
    return (
      <div className={open ? 'sidebar-item open' : 'sidebar-item'}>
        <div className="sidebar-title" onClick={()=> setOpen(!open)}>
          <span>{item.title}</span>
  
          <FaChevronDown className='toggle'  />
  
        </div>
        <div className="sidebar-content">
          {item.children.map((child, index) => <NavbarItems key={index}  item={child}/>)}
        </div>
  
  
      </div>
    )
  }

  else {
    return (
      <a href={item.path || "#"} className="sidebar-item plain">
        <div className="sidebar-title">
          <span>{item.title}</span>
        </div>
      </a>
    )
  }
}

export default NavbarItems
