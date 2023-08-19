import React from "react"
import "./services.css"
import ServicesData from "./ServicesData"

export default function Services(){
    return(
        <section className="services container section" id="services">
            <h2 className="section_title">Services</h2>

            <div className="services_container grid">
                {ServicesData.map((data)=>(
                    <div className="services_card" id={data.id}>
                        <img src={data.image} alt="" className="services_img" />
                        <h3 className="services_title">{data.title}</h3>
                        <p className="services_description">{data.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}