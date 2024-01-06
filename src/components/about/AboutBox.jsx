import React from "react"
import "./about.css"

export default function AboutBox(){
    return(
        <div className="about_boxes grid">
            <div className="about_box">
                <i className="about_icon icon-fire"></i>

                <div>
                    <h3 className="about_title">4</h3>
                    <span className="about_subtitle">project completed</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-people"></i>

                <div>
                    <h3 className="about_title">4</h3>
                    <span className="about_subtitle">work in group</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-people"></i>

                <div>
                    <h3 className="about_title">4</h3>
                    <span className="about_subtitle">tutoring people</span>
                </div>
            </div>

            <div className="about_box">
                <i className="about_icon icon-event"></i>

                <div>
                    <h3 className="about_title">5</h3>
                    <span className="about_subtitle">workshop about IT</span>
                </div>
            </div>
        </div>
    )
}