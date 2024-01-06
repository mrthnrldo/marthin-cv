import React from "react";
import "./resume.css";
import ResumeData from "./ResumeData";
import Card from "./Card";

export default function Resume(){
    return(
        <section className="resume container section" id="resume">
            <h2 className="section_title">Education</h2>

            <div className="resume_container grid">
                <div className="timeline grid">
                    {ResumeData.map((val)=>{
                        if (val.category === "education") {
                            return(
                                <Card 
                                    key={val.id}
                                    icon = {val.icon}
                                    title = {val.title}
                                    year = {val.year}
                                    desc = {val.desc}

                                />
                            )
                        }
                        return null
                    })}
                </div>

                <div className="timeline grid">
                    {ResumeData.map((val, index)=>{
                        if (val.category === "experience") {
                            return(
                                <Card 
                                    key={index}
                                    icon = {val.icon}
                                    title = {val.title}
                                    year = {val.year}
                                    desc = {val.desc}

                                />
                            )
                        }
                        return null;
                    })}
                </div>
            </div>
        </section>
    )
}