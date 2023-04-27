import React from 'react'
import "./RoadmapNew.css"
const RoadmapNew = (props) => {
    return (
        <div>
            <section id="timeline">
                <div className="tl-item">
                    <div className="tl-bg" id="img5"></div>
                    <div className="tl-year text-center">
                        <p className="f2 heading--sanSerif">{props.text1}</p>
                    </div>
                    <div className="tl-content">
                        <h1>{props.subtext1}</h1>
                    </div>
                </div>


                <div className="tl-item">

                    <div className="tl-bg" id="img6"></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">{props.text2}</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">{props.subtext2}</h1>

                    </div>

                </div>

                <div className="tl-item">

                    <div className="tl-bg" id="img7"></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">{props.text3}</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">{props.subtext3}</h1>

                    </div>

                </div>

                <div className="tl-item">

                    <div className="tl-bg" id="img8"></div>

                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">{props.text4}</p>
                    </div>

                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">{props.subtext4}</h1>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default RoadmapNew