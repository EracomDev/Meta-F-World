import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../../Component/Header/Header';
import "./HomePage.css";
import { IoGiftSharp } from "react-icons/io5"
import { IoShieldCheckmarkSharp } from "react-icons/io5"
import { IoGameController } from "react-icons/io5"
import { MdOutlineEmail } from "react-icons/md"
import BgIcon from './../../Images/bgicon.svg';
import bgImage from './../../Images/logo3.png';
import "aos/dist/aos.css";
import Back from "./../../Images/net3.png"
import Back2 from "./../../Images/net4.png"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import TeamMember from '../../Component/TeamMember/TeamMember';
import user1 from "./../../Images/user1.jpeg";
import user2 from "./../../Images/user2.jpeg";
import user3 from "./../../Images/user3.jpeg";
import user4 from "./../../Images/user4.jpeg";
import user5 from "./../../Images/user5.jpeg";
import user6 from "./../../Images/user6.jpeg";
import user7 from "./../../Images/user7.jpg";
import user8 from "./../../Images/user8.jpg";
import ScrollToTop from '../../Component/ScrollToTop/ScrollToTop';
import Roadmap from '../../Component/Roadmap/Roadmap';
import RoadmapNew from '../../Component/RoadmapNew/RoadmapNew';
import WhitePaper from "./../../PDF/whitepaper.pdf"
import Partner from '../../Component/Partner/Partner';
import p1 from "./../../partner/1.jpg"
import p2 from "./../../partner/2.jpg"
import p3 from "./../../partner/3.jpg"
import p4 from "./../../partner/4.png"
import p5 from "./../../partner/5.jpg"
import p6 from "./../../partner/6.png"
import p7 from "./../../partner/7.png"
import p8 from "./../../partner/8.png"
import p9 from "./../../partner/9.png"
import p10 from "./../../partner/10.png"
import Gaming from "./../../Images/gaming.png"
import BgVideo1 from "./../../Videos/v3.mp4"
import MobileBgVideo from "./../../Videos/v4.mp4"
const HomePage = () => {

    useEffect(() => {
        window.addEventListener('load', () => {
        });
    });
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }
    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        });
        return windowDimensions;
    }
    const { height, width } = useWindowDimensions();
    return (
        <React.Fragment>
            {console.log(width)}
            <ScrollToTop />
            {
                width > 767 ? <video id="background-video" loop autoPlay muted>
                    <source src={BgVideo1} type="video/mp4" />
                </video> :
                    <video id="background-video" loop autoPlay muted>
                        <source src={MobileBgVideo} type="video/mp4" />
                    </video>
            }
            <section>
                <div className="headerDiv">
                    <Header />
                </div>
                <div className="headerContentMainDiv">
                    <Container id="home">
                        <div className="headerContent">
                            <h1>Welcome To <br className='hdbr' /><span style={{ color: "#2ae6f5" }}>Meta F World</span></h1>
                            <p>Create, explore and trade in the first-ever virtual world owned by its users.</p>

                        </div>
                    </Container>
                </div>
            </section>
            <section id="about">
                <Container className="textImageContainer" style={{ marginTop: "50px" }}>
                    <Row className="align-items-center">
                        <Col md="6">
                            <div className="textImage">
                                <h2 data-aos="fade-right" data-aos-delay="100" >About</h2>
                                <h1 data-aos="fade-right" data-aos-delay="200" >About Meta F World</h1>
                                <p data-aos="fade-right" data-aos-delay="300" > Meta F is working as an investment company since last seven years. The company takes investment from its customer and company gives a very good return to its customer. Meta F has a team of experts who analyse the market and invest in different sectors like trading in international stocks, forex, crypto and investing in new technology. The main generation part of the company is real estate in which the company has a good name. The company has a good job of real estate in different countries of Asia. The company is now working in the field of technology along with investment . The company is developing its own blockchain, as well as running its native coin on this blockchain, which will easy international transaction and it will be completely decentralized . As the name show, the company is creating an ecosystem for metaverse in which virtual asset and luggage will be able to buy and sell. The company is working on virtual 3D games. Meta F has its own sincere team of experience in technical field and very long experience of generation.
                                </p>
                                {/* <button data-aos="fade-right" data-aos-delay="300" className="btnPrimary">Read More</button> */}
                            </div>
                        </Col>
                        <Col md="6" className="imageCol">
                            <img style={{ width: "100%" }} src={Back} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container className="textImageContainer">
                    <Row className="align-items-center wrapRev">
                        <Col md="6" className="imageCol">
                            <img style={{ width: "100%" }} src={Back2} alt="" />
                        </Col>
                        <Col md="6">
                            <div className="textImage">
                                <h2 data-aos="fade-left" data-aos-delay="100">Vision Purpos & History</h2>
                                <h1 data-aos="fade-left" data-aos-delay="200">What is Meta F World's Vision Purpos & History </h1>
                                <p className='vision' data-aos="fade-left" data-aos-delay="300"><span>Vision</span>We aim for Meta F Virtual Land is to provide a platform for users to purchase, develop and sell virtual land mapped onto the earth with 100% decentralized ledger. A protocol for describing the content of each land parcel and a decentralized ledger for tracking ownership of land.<br></br>
                                    <span>Purpose</span> Our long-term objective is to give land in Meta F land additional uses and usefulness, improve the interactivity of the game, and expand the range of activities you can carry out on it, such as building virtual structures and participating in a burgeoning community. We are looking into a number of ideas, including ways users may be able to allow other users to rent out or develop on their land. You might think of the places you own as websites that are currently reachable online!<br></br>
                                    <span>History</span> Meta F world started as a proof-of-concept for transferring ownership of digital real estate for users on blockchain. This digital property was originally implemented as pixel on Infinite 2D network where each pixel contains owner and metadata identifying owner
                                </p>
                                {/* <button data-aos="fade-left" data-aos-delay="300" className="btnPrimary">Read More</button> */}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section >
                <Container className="textImageContainer">
                    <Row className="align-items-center">
                        <Col md="6">
                            <div className="textImage">
                                <h2 data-aos="fade-right" data-aos-delay="100">P2E</h2>
                                <h1 data-aos="fade-right" data-aos-delay="200">Meta F P2E Games</h1>
                                <p data-aos="fade-right" data-aos-delay="300">Meta F P2E Game provides a user-friendly Video games and virtual worlds for users to live up to date on blockchain news, top Play to Earn games and first-class NFT initiatives. With the comprehensive GameFi and NFT rankings, you may easily locate the most-hyped initiatives with inside the Web3 space. While P2E. Game's Launchpad segment provides customers with an insider’s angle on what’s new and upcoming in the global of NFTs, IDOs and Blockchain Gaming, the Mission Center offers customers an incentive to live unswerving to the platform. Everything you want on NFTs, IDOs and Crypto Games is on P2E.Game!</p>
                                {/* <button data-aos="fade-right" data-aos-delay="300" className="btnPrimary">Read More</button> */}
                            </div>
                        </Col>
                        <Col md="6" className="imageCol">
                            <img style={{ width: "100%" }} src={Gaming} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="whatCanDoSection" style={{ position: "relative" }}>
                <Container className="whatCanDo">
                    <Row>
                        <Col md="2"></Col>
                        <Col md="8">
                            <div className="whatCanDoText">
                                <h1>
                                    If you can do it in the real world<br></br> you can do it in the Metaverse.
                                </h1>
                                <p>By creating the largest database of scanned objects and people - the Meta F World revolution will transport the world into the future - into the Metaverse. Investors, Users, and Beneficiaries will all have the ability to be scanned, and have full control of their scanned property.</p></div>
                        </Col>
                    </Row>
                    <div>
                        <Row>
                            <Col md="4" >
                                <div className="whatCanDoitems">
                                    <img data-aos="fade-up" data-aos-delay="100" src={BgIcon}></img>
                                    <i data-aos="fade-up" data-aos-delay="100"  ><IoGameController /></i>
                                    <h4 data-aos="fade-up" data-aos-delay="200" >Gaming</h4>
                                    <p data-aos="fade-up" data-aos-delay="300" >Play yourself in a video game</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="whatCanDoitems">
                                    <img data-aos="fade-up" data-aos-delay="100" src={BgIcon}></img>
                                    <i data-aos="fade-up" data-aos-delay="100" ><IoShieldCheckmarkSharp /></i>
                                    <h4 data-aos="fade-up" data-aos-delay="200" >Licensing</h4>
                                    <p data-aos="fade-up" data-aos-delay="300" >License your property to outside developers and create revenue streams for yourself</p>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="whatCanDoitems">
                                    <img data-aos="fade-up" data-aos-delay="100" src={BgIcon}></img>
                                    <i data-aos="fade-up" data-aos-delay="200" ><IoGiftSharp /></i>
                                    <h4 data-aos="fade-up" data-aos-delay="300">NFT</h4>
                                    <p data-aos="fade-up" data-aos-delay="500" >Create NFTs to auction, trade or sell directly</p>
                                </div>
                            </Col>
                        </Row>
                    </div></Container>
                <img className='bgImage' src={bgImage}></img>
            </section>
            <section className="roadmapSection" id="roadmap">

                <h1>Roadmap</h1>
                <p>The team expects to hit the following milestones in a disciplined manner with limited risk of delays.</p>
                <OwlCarousel items={1}
                    className="owl-theme"
                    margin={8}
                    autoplay={false}
                    autoplayTimeout={2500}
                    autoplayHoverPause={true} >
                    <Roadmap
                        text1="Q1 2023"
                        subtext1="MetaF Swap"
                        text2="Q2 2023"
                        subtext2="Exchange Listing"
                        text3="Q3 2023"
                        subtext3="MetaF Card"
                        text4="Q4 2023"
                        subtext4="NFT Marketplace"
                    />
                    <RoadmapNew
                        text1="Q1 2024"
                        subtext1="Wallet App"
                        text2="Q2 2024"
                        subtext2="P2E Gaming"
                        text3="Q3 2024"
                        subtext3="Web3.0 Tour and Travel"
                        text4="Q4 2024"
                        subtext4="Buy/Sell NFT and Land
                        "
                    />
                    <div className="tl-item tl-item1" style={{ width: "100%" }}>

                        <div className="tl-bg" id="img9"></div>

                        <div className="tl-year">
                            <p className="f2 heading--sanSerif">Q1 2025</p>
                        </div>

                        <div className="tl-content">
                            <h1>Launch Main net Layer one <br /> (Proof of Stake)</h1>

                        </div>

                    </div>

                </OwlCarousel>

            </section>

            <section className='myTeamSection' id="myteam">
                <Container>
                    <h1>Our Team Members</h1>
                    <p className="subHeading">We are a curated team of international experts united by a single goal; Our team members are expert in crypto market</p>
                    <OwlCarousel items={width < 768 ? 1 : width > 767 && width < 1000 ? 3 : 4}
                        className="owl-theme"
                        loop
                        margin={8}
                        autoplay={true}
                        autoplayTimeout={1500}
                        autoplayHoverPause={true} >
                        <div><TeamMember
                            img={user1}
                            name="Gourav Rana"
                            about="Co Founder"
                            instagram="https://instagram.com/gaurav_pratap_rana?igshid=YmMyMTA2M2Y="
                            linkedin="https://www.linkedin.com/in/gaurav-pratap-804b51129"
                            twitter="https://twitter.com/gauravrana859?s=11&t=W3PCyw9XAp6ebC3MWaaUpw"
                            telegram="https://t.me/GGaurav0933"
                            facebook=""
                        /></div>
                        <div><TeamMember
                            img={user2}
                            name="Ram Sharan"
                            about="Co Founder"
                            facebook="https://www.facebook.com/raam.sharma.12?mibextid=LQQJ4d"
                            linkedin="https://www.linkedin.com/in/ram-bhardwaj-1882b0221"
                            twitter="https://twitter.com/RamsaranBhardwj"
                            telegram="https://t.me/RamBhardwaj1"
                            instagram=""
                        /></div>
                        <div><TeamMember
                            img={user7}
                            name="Shivam goyal"
                            about="Founding Engineer"
                            instagram="https://instagram.com/shivam_goyal_0?igshid=MTIyMzRjYmRlZg=="
                            linkedin="https://www.linkedin.com/in/shivam-goyal-28bba1275"
                            twitter="https://twitter.com/Shivam_goyal_0?t=mGTGt-8rCxUYhoWHUKy3CQ&s=09"
                            telegram="http://t.me/shivam_goyal_0"
                            facebook=""
                        /></div>
                        <div><TeamMember
                            img={user8}
                            name="Dinesh Mehta"
                            about="Product Manager"
                            instagram="https://instagram.com/dinesh_k.k.r?igshid=ZDdkNTZiNTM="
                            linkedin="https://www.linkedin.com/in/daksh-finance-2a503316b"
                            facebook="https://www.facebook.com/dineshmehta414?mibextid=ZbWKwL"
                            telegram="https://t.me/Dn414"
                            twitter=""
                        /></div>
                    </OwlCarousel>

                </Container>
            </section>
            <section id="dao">
                <div className="about" >
                    <Container>
                        <div className="aboutText">
                            <h1 data-aos="fade-down" data-aos-delay="100" >What is DAO</h1>

                            <p data-aos="fade-down" data-aos-delay="300">A DAO is a decentralized autonomous organization. A type of bottom up entity structure with no central authority. Member of the DAO own token of the DAO and member can vote on initiative for the entity, smart contracts are implemented for the DAO and the DAO code governing the DAO’s operations in the publicly Disclosure<br></br>
                                To be part of Meta F DAOs one must have Meta F token. If you have Meta F token, then only you can become the voting member of Meta F DAO.The voting process for DAOs is posted on a blockchain. Users must often select between mutually-exclusive options. Voting power is often distributed across users based on the number of tokens they hold. For example, one user that owns 100 Meta F tokens of the DAO will have twice the weight of voting power over a user that owns 50 Meta F tokens. The theory behind this practice is users who are more monetarily invested in the DAO are incentivized to act in good faith. Imagine a user who owns 25% of overall voting</p>
                            <h4 className="supply">TOTAL SUPPLY 40 MILLION (40000000)</h4>
                        </div>
                    </Container>
                    {/* <img src={AboutBg}></img> */}
                </div>
            </section>
            <section className='myTeamSection' id="partner">
                <Container>
                    <h1 className='partnerh1'>Partners</h1>
                    <p className="subHeading">All these are our authorized partners</p>
                    <OwlCarousel items={width < 768 ? 1 : width > 767 && width < 1000 ? 4 : 6}
                        className="owl-theme"
                        loop
                        margin={8}
                        autoplay={true}
                        autoplayTimeout={1500}
                        autoplayHoverPause={true} >
                        <div><Partner
                            img={p1}
                            text="CoinMarketcap"
                        /></div>
                        <div><Partner
                            img={p2}
                            text="CoinGecko"
                        /></div>
                        <div><Partner
                            img={p3}
                            text="Polygon"
                        /></div>
                        <div><Partner
                            img={p4}
                            text="BSC"
                        /></div>
                        <div><Partner
                            img={p5}
                            text="Marcus Corporations"
                        /></div>
                        <div><Partner
                            img={p6}
                            text="Kedia Capital"
                        /></div>
                        <div><Partner
                            img={p7}
                            text="MPC Builders"
                        /></div>
                        <div><Partner
                            img={p8}
                            text="The Economist"
                        /></div>
                        <div><Partner
                            img={p9}
                            text="Forbes"
                        /></div>
                        <div><Partner
                            img={p10}
                            text="Antara"
                        /></div>
                    </OwlCarousel>
                </Container>
            </section>
            <section className='contactus' id="contact">
                <Container>
                    <Row>
                        <Col md="12" >
                            <div className="textImage contactText">
                                <h2 data-aos="fade-right" data-aos-delay="100">CONTACT US</h2>
                                <h1 data-aos="fade-right" data-aos-delay="300">Are you looking to partner with Meta F World?</h1>
                                <p data-aos="fade-right" data-aos-delay="500">We are looking to work with people and companies that are serious about the mass adoption of crypto, metaverse explorers, marketing partners, and those who wish to place our scanners around the world.</p>
                                <h5 data-aos="fade-right" data-aos-delay="500"><i><MdOutlineEmail /></i> info.metaf@gmail.com</h5>
                            </div>
                        </Col>
                        {/* <Col md="6">
                            <div className="contactusForm">
                                <Row>
                                    <Col sm="6">
                                        <div className="inputDiv">
                                            <lable>Name</lable>
                                            <input type="text" placeholder='Name...'></input>
                                        </div>
                                    </Col>
                                    <Col sm="6"><div className="inputDiv">
                                        <lable>Surname</lable>
                                        <input type="text" placeholder='Surname...'></input>
                                    </div></Col>
                                </Row>
                                <div className="inputDiv">
                                    <lable>Email</lable>
                                    <input type="email" placeholder='Email...'></input>
                                </div>
                                <div className="inputDiv">
                                    <lable>Phone number</lable>
                                    <input type="text" placeholder='Phone number...'></input>
                                </div>
                                <div className="inputDiv">
                                    <lable>Message</lable>
                                    <textarea name="" id="" cols="30" rows="5" placeholder='Your message...'></textarea>
                                </div>
                                <div className='termCondition'>
                                    <input type="checkbox" name="" id="" />
                                    <p>I agree to the <span>terms of service</span> and <span>privacy policy</span></p>
                                </div>
                                <button className="sendBtn">Send</button>
                            </div>
                        </Col> */}
                    </Row>
                </Container>
            </section>

            <section className='socialMediaSection'>
                <div className="social-container">
                    <ul className="social-icons">
                        <li><a href="https://www.instagram.com/metaftech/?igshid=YmMyMTA2M2Y%3D" target="_blank"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="https://twitter.com/metaf16" target="_blank"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="https://www.facebook.com/metaftech?mibextid=LQQJ4d" target="_blank"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="https://www.youtube.com/@metaftoken5207" target="_blank"><i className="fa fa-youtube"></i></a></li>
                    </ul>
                </div>
            </section>
            <section className="footer">
                <hr ></hr>
                <p> &#169; Copyright All Rights Reserved By : <span>Meta F World</span></p>
            </section>
        </React.Fragment >
    );
}
export default HomePage





