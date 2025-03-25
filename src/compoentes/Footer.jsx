import React from 'react'



const Footer = () => {
  return (
    <div className=' bg-black text-white' >
     <img src=""
          alt="logo">
     </img>
     <p className='text-sm'>Making the world a better health through Our Support</p>

     <div className='flex gap-5 justify-evenly'>
      <div>
        <h3>Solutions</h3>
        <ul>
          <li>Marketing</li>
        </ul>
      </div>
      <div>
        <h3>Support</h3>
      </div>
      <div>
        <h3>Legal</h3>
      </div>
      <div>License</div>
     </div>
    </div>
  )
}

export default Footer