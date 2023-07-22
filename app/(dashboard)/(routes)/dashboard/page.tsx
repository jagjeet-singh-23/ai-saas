import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashBoard = () => {
  return (
    <div>
      <p>DashBoard Page (Protected)</p>
      <UserButton afterSignOutUrl='/'/>
    </div>
  )
}

export default DashBoard