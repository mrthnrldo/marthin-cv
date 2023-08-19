import React from "react"
import "./home.css"
import Me from "../assets/marthin.png"
import HeaderSocials from "./HeaderSocials"
import ScrollDown from "./ScrollDown"
import Shapes from "./Shapes"

export default function Home(){
    return(
        <section className="home_container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home_img" />
                <h1 className="home_name">Marthin Riyaldo</h1>
                <span className="home_education">I'm a Front-End Developer</span>
                <HeaderSocials/>

                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown/>
            </div>

            <Shapes/>
        </section>
    )
}