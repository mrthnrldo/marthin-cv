import React, { useState } from "react";
import "./portofolio.css"
import PortofolioMenu from "./PortofolioMenu";

export default function Portofolio(){
    const [items, setItems] = useState(PortofolioMenu)
    const filterItem = (categoryItem) => {
        const updatedItems = PortofolioMenu.filter((curElem) =>{
            return curElem.category === categoryItem
        });
        setItems(updatedItems);
    }
    return(
        <section className="portofolio container section" id="portofolio">
            <h2 className="section_title">Portofolio</h2>

            <div className="portofolio_filters">
                <span className="work_item" onClick={() => setItems(PortofolioMenu)}>Everything</span>
                <span className="work_item" onClick={() => filterItem("Graphic Design")}>Graphic Design</span>
                <span className="work_item" onClick={() => filterItem("UI/UX")}>UI/UX</span>
                <span className="work_item" onClick={() => filterItem("Web Design")}>Web Design</span>
            </div>
            <div className="portofolio_container grid">
                {items.map((item)=>{
                    const{id,image,title,category, link} = item;
                    return(
                        <div className="portofolio_card" key={id}>
                            <div className="portofolio_thumbnail">
                                <img src={image} alt="" className="portofolio_img" />
                                <div className="portofolio_mask"></div>
                            </div>

                            <span className="portofolio_category">{category}</span>
                            <h3 className="portofolio_title">{title}</h3>
                            <a href={link} className="portofolio_button" target="_blank" rel="noreferrer">
                                <i className="icon-link portofolio_buttom-item"></i>
                            </a>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}