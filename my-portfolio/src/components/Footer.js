import "./FooterStyles.css"

import React from 'react'
import {FaLinkedin} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <p color="white">More to come!</p>
            </div>
            <div className="right">
                <p color="white">About</p>
                <div>
                    <FaLinkedin
                        size = {30}
                        style = {{color:"#fff", marginRight: "2rem"}}
                    />
                        
                </div>
            </div>
        </div>
    </div>

  )
}

export default Footer