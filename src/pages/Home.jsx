import React from 'react'

//importing HomeCard into home
import HomeCard from "../Components/HomeCard"

const Home = () =>{

    return(

        <div style={{height:'85vh',backgroundColor:'ButtonFace'}}>
            <h1 style={{margin:'20px'}}>
            this is Home Page
            </h1>
            <div className="CardsContainer"style={{padding:'20px',display:'flex',justifyContent:'space-evenly'}}>
            <HomeCard/>
            <HomeCard/>
            <HomeCard/>
            </div>
        
        </div>
    )
}

export default Home 