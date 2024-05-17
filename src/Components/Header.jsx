import React from 'react'

const Header = () => {
  return (
    <div className='header'>
      <div style ={{ width:'100%',height:'60px',backgroundColor:'gray'}}>
        <div className='Container' style={{width:'30%',height:'inherit', display:'flex',justifyContent:'space-between',alignItems:'center',marginLeft:'68%'}} >
          <div>Home</div>
          <div>AboutUs</div>
          <div>Contact</div>
          <div>Gallery</div>
            </div>
      </div>
      
    </div>
  )
}

export default Header
