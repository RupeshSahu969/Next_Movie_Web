// MenuItem.js
import Link from 'next/link'
import React from 'react'

export const MenuItem = ({ title, address, Icon }) => { // Corrected prop name to 'Icon'
  return (
    <Link href={address} className='hover:text-amber-500' >
      <Icon className='text-2x1 sn:hidden'/>
      <p className='uppercase hidden sn:inline text-sn'>{title}</p>
    </Link>
  )
}
