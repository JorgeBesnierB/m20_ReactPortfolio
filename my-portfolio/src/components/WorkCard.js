import "./WorkCardStyles.css"

import React from 'react'



const WorkCard = (props) => {
  return (
    <div className="project-card">
        <img src={props.imgsrc} height={550} width={640} alt="dynamic"/>
        <h2 className="project-title">{props.title}</h2>
        <div className="pro-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <a href = {props.view}  target="_blank" className="btn">Github</a>
            </div>
        </div>
    </div>
  )
}

export default WorkCard
