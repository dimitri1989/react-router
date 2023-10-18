import React from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../components/Menu'

const Mainlayouts = () => {
  return (
    <>
    <Menu/>
    <Outlet/>
    </>
  )
}

export default Mainlayouts