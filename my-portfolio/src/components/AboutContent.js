import "./AboutContentStyle.css"

import React from 'react'
import {Link} from "react-router-dom"
import react1 from "../assets/a1.webp"
function AboutContent() {
  return (
    <div className="about">
         <div className="left">
            <h1>Who Am I? </h1>
            <p>I'm a digital systems and robotics engineer and I am learning full stack development</p>
            <Link to = "/contact"> 
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src = {react1} height={550} width={640}  alt = "true"/>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default AboutContent