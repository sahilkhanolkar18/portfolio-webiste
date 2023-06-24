import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNow] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=>{setActiveNow('#')}} className={activeNav === '#' ? 'active' :''}><AiOutlineHome /></a>
      <a href='#about' onClick={()=>{setActiveNow('#about')}} className={activeNav === '#about' ? 'active' :''} ><AiOutlineUser /></a>
      <a href='#experience' onClick={()=>{setActiveNow('#experience')}} className={activeNav === '#experience' ? 'active' :''}><BiBook /></a>
      <a href='#services' onClick={()=>{setActiveNow('#services')}} className={activeNav === '#services' ? 'active' :''}><RiServiceLine /></a>
      <a href='#contact' onClick={()=>{setActiveNow('#contact')}} className={activeNav === '#contact' ? 'active' :''}><BiMessageSquareDetail /></a>

    </nav>
  )
}

export default Nav