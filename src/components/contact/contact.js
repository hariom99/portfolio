import React from "react";
import phone from "../../images/icons/phone-call.png"
import email from "../../images/icons/mail.png"


export default function Contact() {
    return (
        <div className="contact-parent" >


            <div className="contact">
                <div>
                    <h3>Let's connect</h3>
                    <p> Lets's have conversation, We can have communication
                        via Email, Phone or You can reach out to me by filling
                        this form.
                    </p>
                    <br />
                    <img className="phn-img" src={phone} alt="" />
                    <a href="tel:+919644597974">9644597974</a>
                    <br />
                    <img className="phn-img" src={email} alt="" />
                    <a href="mailto: hariomkourav1999@gmail.com">hariomkourav1999@gmail.com</a>
                </div>
            </div>


            <div className="form"  >
                <div>
                    <form>
                        <label htmlFor="name" >Full Name <span className="imp" >*</span> </label>
                        <br />
                        <input id="name" ></input>

                        <br />

                        <label htmlFor="phone" >Phone <span className="imp" >*</span> </label>
                        <br />
                        <input id="phone" ></input>

                        <br />

                        <label htmlFor="email" >Email <span className="imp" >*</span> </label>
                        <br />
                        <input id="email" ></input>

                        <br />

                        <label htmlFor="message" >Message <span className="imp" >*</span> </label>
                        <br />
                        <textarea id="message" type="" ></textarea>
                        <br />
                        <button className="btn-form" >Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}