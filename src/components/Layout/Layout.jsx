import React from 'react'
import Topnav from '../Topnav/Topnav'
// import Homepage from '../../pages/Homepage/Homepage'

export default function Layout({ Component }) {
  return (
    <div className='h-full min-h-screen flex flex-col'>
      <Topnav />
      <div className='flex-grow mt-0'>
        <Component />
      </div>
    </div>
  )
}
