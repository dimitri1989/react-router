import React from 'react'
import { NavLink } from 'react-router-dom'

const style = {
    display: "flex",
    flexDirection: "column"
}
const Menu = () => {
  return (
    <nav style={style}>
        <NavLink className={({isActive}) =>isActive ? 'activeLink' : 'link'} to="/" end>Home</NavLink>
        <NavLink className={({isActive}) =>isActive ? 'activeLink' : 'link'} to={"/About"}>About</NavLink>
        <NavLink className={({isActive}) =>isActive ? 'activeLink' : 'link'} to={"/Contact"}>Contact</NavLink>
        
    </nav>
  )
}

export default Menu