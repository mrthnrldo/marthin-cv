import React from "react";
import "./home.css"

export default function HeaderSocials(){
    return(
        <div className="home_socials">
            <a href="https://www.instagram.com/marthinrl/" className="home_social-link" target="_blank">
                <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://www.github.com/mrthnrldo" className="home_social-link" target="_blank">
                <i class="fa-brands fa-github"></i>
            </a>

            <a href="https://www.linkedin.com/in/marthin-riyaldo-solini-kese-75b001262/" className="home_social-link" target="_blank">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>

            <a href="https://id.pinterest.com/marthinriyaldo/" className="home_social-link" target="_blank">
                <i class="fa-brands fa-pinterest"></i>
            </a>
        </div>
    )
}