import React from 'react'
import './About.css'
import aboutImg from './img/about.jpg'

export default function About() {
    return (
        <div className="about component__space" id="About">
            <div classNam="container">
                <div className="row">
                    <div className="col__2">
                        <img  src={aboutImg} alt="" className="about__img"/>
                    </div>
                    <div className="col__2">
                        <h1 className="about__heading">
                            About Me
                        </h1>
                        <div className="about__meta">
                            <p className="about__text p__color">
                            In publishing and graphic design,
                             Lorem ipsum is a placeholder text 
                             commonly used to demonstrate the 
                             visual form of a document or a 
                             typeface without relying on meaningful 
                             content.
                            </p>
                            <p className="about__text p__color">
                            In publishing and graphic design,
                             Lorem ipsum is a placeholder text 
                             commonly used to demonstrate the 
                             visual form of a document or a 
                             typeface without relying on meaningful 
                             content.
                            </p>
                            <p className="about__text p__color">
                            In publishing and graphic design,
                             Lorem ipsum is a placeholder text 
                             commonly used to demonstrate the 
                             visual form of a document.                           
                            </p>
                            <div className="about__button d__flex align__items__center">
                               <a href="#"><button className="about btn pointer">Download cv</button></a> 
                               <a href="#"><button className="about btn pointer">Hire me</button></a> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    )
}
