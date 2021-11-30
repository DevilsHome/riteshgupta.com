import React from 'react'
import './Contact.css';

export default function contact() {
    return (
        <section>
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire me</h1>
                            <p className="hire__text white">I am avilable for freelance work.connect with me via phone </p>
                            <p className="hire__text white"><strong>+91 7667807640</strong> or email <strong> riteshkr142002@gmail.com</strong></p>
                        </div>
                        <div className="input_box">
                            <input type="text"  className="contact name" placeholder="Your name"/>
                            <input type="text"  className="contact email" placeholder="Your Email"/>
                            <input type="text"  className="contact subject" placeholder="write a subject"/>
                           <textarea name="message" id="message" placeholder="write  Your Message"></textarea>
                           <button className="btn contact pointer" type="submit"><a href="./">Submit</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
