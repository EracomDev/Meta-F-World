import React from 'react'
import "./Partner.css"
const Partner = (props) => {
    return (
        <>
            <div className="partnerDiv">
                <img src={props.img} alt="" />
                <h5>{props.text}</h5>
            </div>
        </>
    )
}
export default Partner