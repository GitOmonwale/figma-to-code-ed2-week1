import React from 'react'
import logo from '../assets/logo.svg'
import { FooterLinks } from '../constants'
const Footer = () => {
  return (
    <div className='flex flex-col gap-4 my-10'>
      <img src={logo} alt="" className='w-10 h-10' />
      <hr />
      <div className='flex items-center justify-between flex-wrap'>
        <h4 className='font-bold text-neutral-600 text-xl'>Create Explore & Collect Digital  NFTs</h4>
        <div className='flex items-center text-sm font-bold justify-center gap-5'>
          {
            FooterLinks.map((links, index) => (
              <a href="#" key={links.id}>{links.title}</a>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Footer
