import "./HeroImgStyles.css";

import React from 'react'

import IntroImg from "../assets/hero1.webp"

import {Link} from "react-router-dom";


const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt = 'IntroImg'/>
        </div>
        <div className="content">
            <p>Hi, I'm a fullstack student</p>
            <h1>Portfolio made with react</h1>
            <div>
                <Link to = "/project" className="btn">Projects</Link>
                <Link to = "/contact" className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImg