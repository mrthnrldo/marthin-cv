import React, { useState } from "react"
import "./sidebar.css"
import Logo from "../assets/logoweb.svg"

export default function Sidebar(){

    const [toggle, setToggle] = useState(false)
    return(
        <>
        <aside className={toggle ? "aside show-menu" : "aside"}>
            <a href="#home" className="nav_log">
                <img src={Logo} alt="" />
            </a>

            <nav className="nav">
                <div className="nav_menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <a href="#home" className="nav_link">
                                <i className="icon-home"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link" alt="about">
                                <i className="icon-user-following"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#services" className="nav_link">
                                <i className="icon-briefcase"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#resume" className="nav_link">
                                <i className="icon-graduation"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#portofolio" className="nav_link">
                                <i className="icon-layers"></i>
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link">
                                <i className="icon-bubble"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="nav_footer">
                <span className="copyright">&copy; 2023.</span>
            </div>
        </aside>

        <div className={toggle? "nav_toggle nav_toggle-open" : "nav_toggle"} onClick={()=> setToggle(!toggle)} >
            <i className="icon-menu"></i>
        </div>
        </>
    )
}