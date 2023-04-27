import React, { useState, useEffect } from 'react';
import "./Header.css";
import Logo from "./../../Images/metaLogo.png"
import { Container } from "react-bootstrap";
import WhitePaper from "./../../PDF/whitepaper.pdf";
import Document from "./../../PDF/document.pdf"
const Header = () => {
    const [navDisplay, setNavDisplay] = useState("block")
    const toggle = () => {
    }
    return (
        <React.Fragment>
            <Container>
                <div className="headerDiv" id="headerTop">
                    <div className="headerInnerDiv">
                        <img className='headerImg' src={Logo}></img>
                        <a href='#dao'>DAO</a>
                        <a href='#about'>About</a>
                        <a href='#myteam'  >My Team</a>
                        <a href="#roadmap">Roadmap</a>
                        <a href="#partner">Partner</a>
                    </div>
                    <div className="headerBtnDiv">
                        <a style={{marginRight: "20px"}} href={Document} target="_blank"><button className="btnSecondary">Documents</button></a>
                        <a href={WhitePaper} target="_blank"><button className="btnSecondary">white Paper</button></a>
                    </div>
                </div>
            </Container>
        </React.Fragment >
    )
}

export default Header