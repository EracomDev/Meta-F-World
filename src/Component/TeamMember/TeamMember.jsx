import React from 'react'
import "./TeamMember.css"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
const TeamMember = (props) => {
    return (
        <div className='memberCard'>
            <img src={props.img}></img>
            <h3>{props.name}</h3>
            <h4>{props.about}</h4>
            <div className="mediaIcons">
                <i><FaFacebookF /></i>
                <i><FaInstagram /></i>
                <i><FaTwitter /></i>
                <i><FaTelegramPlane /></i>
            </div>
        </div>
    )
}

export default TeamMember