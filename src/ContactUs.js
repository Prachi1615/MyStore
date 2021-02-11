import React from 'react'
import { Link } from "react-router-dom";

function ContactUs() {
    return (
        <div className="contact">


            <div>
                <h1 className="heading">Contact Us</h1>
                <div >
                    <div className="content1">
                        <h3>Call us on:</h3>
            +91 8792122821
                    </div>
                    <br />
                    <br />
                    <div className="content2">
                        <h3>Email us on:</h3>
            customercare@dhuandhar.store
                    </div>
                    <br />
                    <br />
                    <div className="content2">
                        <h3>Location:</h3>
                        <Link to={{ path: "https://goo.gl/maps/wLvNWq6pAht1B2xS7" }}>https://goo.gl/maps/wLvNWq6pAht1B2xS7</Link>
                    </div>

                </div>



            </div>

        </div>


    )
}

export default ContactUs
