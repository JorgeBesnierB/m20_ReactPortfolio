import "./WorkCardStyles.css"

import React from 'react'
import prod1 from "../assets/p1.webp"
import {NavLink} from "react-router-dom";

const WorkCard = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            <div className="project-card">
                <img src={prod1} alt="image"/>
                <h2 className="project-title">title</h2>
                <div className="pro-details">
                    <p> text</p>
                    <div className="pro-btns">
                        <NavLink to = " " className="btn"> text</NavLink>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default WorkCard
