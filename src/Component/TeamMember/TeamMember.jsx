import React from 'react'
import "./TeamMember.css"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
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
                {
                    props.facebook.length > 0 ? <a href={props.facebook} target='_blank'><i><FaFacebookF /></i></a> : ''
                }
                {
                    props.instagram.length > 0 ? <a href={props.instagram} target='_blank'><i><FaInstagram /></i></a> : ''
                }
                {
                    props.linkedin.length > 0 ? <a href={props.linkedin} target='_blank'><i><FaLinkedinIn /></i></a> : ''
                }
                {
                    props.twitter.length > 0 ? <a href={props.twitter} target='_blank'><i><FaTwitter /></i></a> : ''
                }
                {
                    props.telegram.length > 0 ? <a href={props.telegram} target='_blank'><i><FaTelegramPlane /></i></a> : ''
                }
                {/*                 
                <a href='#'><i><FaInstagram /></i></a>
                <a href='#'><i><FaTwitter /></i></a>
                <a href='#'><i><FaTelegramPlane /></i></a>
                <a href='#'><i><FaLinkedinIn /></i></a> */}
            </div>
        </div>
    )
}

export default TeamMember