/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import instagram from '../images/Layer 2.png'
import logo from '../images/41497817-image-1-2x.png.rendition.260.260.png'

function Footer() {
  return (
    <div className='bg-blue h-[766px] flex flex-col text-white justify-around mt-20 items-center text-center'>
      <nav className='flex flex-col justify-between h-[442px]'>
        <ul>
          <li>
            <button className='w-[128px] h-[47px] font-bold'>
              <a href="">contact us</a>
            </button>
          </li>
        </ul>
        <div className='border w-1/5 mx-auto'></div>
        <ul>
          <li>
            <button className='w-[128px] h-[47px] font-bold '>
              <a href="">faq</a>
            </button>
          </li>
        </ul>
        <div className='border w-1/5 mx-auto'></div>
        <ul>
          <li>
            <button className='w-[128px] h-[47px] font-bold '>
              <a href="">site map</a>
            </button>
          </li>
        </ul>
        <div className='border w-1/5 mx-auto'></div>
        <ul>
          <li>
            <button className='w-[128px] h-[47px] font-bold '>
              <a href="">privacy policy</a>
            </button>
          </li>
        </ul>
        <div className='border w-1/5 mx-auto'></div>
        <ul>
          <li>
            <button className='w-[128px] h-[47px] font-bold '>
              <a href="">cookies policy</a>
            </button>
          </li>
        </ul>
        <ul>
          <div className='border w-1/5 mx-auto'></div>
          <li>
            <button className='w-[128px] h-[47px] font-bold '>
              <a href="">legal notice</a>
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <img src={instagram} alt="" />
      </div>
      <div>
        <img src={logo} className='w-[116px] h-[29px]' alt="" />
      </div>
    </div>
  )
}

export default Footer