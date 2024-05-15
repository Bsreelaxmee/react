import React from 'react'

//importing home into layout
//import Home from '../pages/Home'

//importing About into layout
import About from '../pages/About'

const Mainlayout = ()=>{
    return(
        <div>
            <div className='Header'style={{height:'50px',backgroundColor:'beige',}}>
                Header
            </div>
           {/* <Home/> */}
           <About/>
        </div>
    )
}

export default Mainlayout