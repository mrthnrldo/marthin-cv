import React from "react";
import "./about.css"
import About1 from "../assets/marthin2.png"
import AboutBox from "./AboutBox";

export default function About(){
    return(
        <section className="about container section" id="about">
            <h2 className="section_title">About Me</h2>
            <div className="about_container grid">
                <img src={About1} alt="" className="about_img" />
                <div className="about_data grid">
                    <div className="about_info">
                        <p className="about_description">Hallo! Saya Marthin Riyaldo Solini Kese, Mahasiswa Informatika angkatan 2022 Universitas Multimedia Nusantara. Mempunyai minat dalam 
                        pengembangan web terutama pada bagian Front-end Development. Aktif mencari peluang untuk mengembangkan diri di bidang IT
                        </p>
                        <a href="www.intagram.com" className="btn">Download CV</a>
                    </div>
                    <div className="about_skills grid">
                            <div className="skills_data">
                                <div className="skills_title">
                                    <h3 className="skills_name">HTML</h3>
                                    <span className="skills_number">90%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage html"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_title">
                                    <h3 className="skills_name">CSS</h3>
                                    <span className="skills_number">80%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage css"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_title">
                                    <h3 className="skills_name">JavaScript</h3>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage javascript"></span>
                                </div>
                            </div>

                            <div className="skills_data">
                                <div className="skills_title">
                                    <h3 className="skills_name">ReactJs</h3>
                                    <span className="skills_number">50%</span>
                                </div>
                                <div className="skills_bar">
                                    <span className="skills_percentage reactjs"></span>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <AboutBox/>
        </section>
    )
}