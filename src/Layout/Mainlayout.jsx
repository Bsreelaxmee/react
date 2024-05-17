import React from 'react'

//importing home into layout
//import Home from '../pages/Home'

//importing About into layout
import About from '../pages/About'

// importing header into layout
import Header from '../Components/Header'

// importing footer into layout
import Footer from '../Components/Footer'

const Mainlayout = ()=>{
    return(
       
            <div>
           <Header/>
           <About/>
          {/* <Home/>*/}
           <Footer/>
        </div>
    )
}

export default Mainlayout