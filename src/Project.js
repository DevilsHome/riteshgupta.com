import React from 'react'
import './Project.css';
import Project1 from './img/portfolio-1.jpg'
import Project2 from './img/portfolio-2.jpg'
import Project3 from './img/portfolio-3.jpg'


function Project() {
    return (
        <div className="project component__space" id="Project">
            <div className="heading">
                <h1 className="heading">My Live Project are</h1>
                <p className="heading p__color">
                    There are Many Project that i have worked on
                </p>
                <p className="heading p__color">
                    You can Watch it by click on the given link
                </p>
            </div>
            <div className="container">
                <div className="row">

                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project1}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project2}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project3}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project1}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project2}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col__3">
                        <div className="project__box pointer">
                            <div className="project__box__img pointer relative">
                                <div className="project__img__box">
                                   <img src={Project3}  alt="" className="project__img" />
                                
                                <div className="mask__effect"> </div>
                                </div>
                                <div className="project__meta absolute">
                                    <h5 className="project__text">Development</h5>
                                    <h5 className="project__text">Getting Ticket to the big Show</h5>
                                    <a href="/" className="project__btn">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        
    )
}

export default Project
