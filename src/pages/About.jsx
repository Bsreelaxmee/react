import React from "react"

//importing AboutCard into about
import AboutCard from "../Components/AboutCard"

const About = ()=>{
    return (
        <div style={{height:'85vh',backgroundColor:'burlywood'}}>
            <h1 style={{margin:'20px'}}>
            this is About Page
            </h1>
            <div className="CardsContainer"style={{padding:'20px',display:'flex',justifyContent:'space-evenly'}}>
            <AboutCard/>
            <AboutCard/>
            <AboutCard/>
            </div>
        
        </div>
    )
}
export default About 