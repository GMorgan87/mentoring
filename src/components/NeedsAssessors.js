import React from 'react'
// import pic2 from '../assets/images/outdoor.jpg';
import pic3 from '../assets/images/why.jpg';
import pic4 from '../assets/images/for_me.jpg';
import pic5 from '../assets/images/begin.jpg';
import pic6 from '../assets/images/Fees.jpg';

const q = () => {
    return (
        <div>
            <section id="two" className="wrapper alt style2">
        
                <section id="why" className="spotlight">
                    <div className="image">
                    <img src={pic3} alt="" />
                    </div>
                    <div className="content">
                    <h2>
                        Needs Assessors
                    </h2>
                    <p>
                        At Clear Mind Mentoring we use a tailored approach in matching individual student needs with suitably qualified Non-Medical support staff.
                        Our support staff come from a range of professional backgroundsincluding Psychology, Teaching, Counselling and Occupational Therapy.
                        As well as offering professional knowledge, our staff have undertaken extensive post-graduate training and engage in ongoing relevant Continuing Professional Development (CPD). 
                    </p>
                    </div>
                </section>

                <section id="right" className="spotlight">
                    <div className="image">
                    <img src={pic4} alt="" />
                    </div>
                    <div className="content">
                    <h2>
                        Current DSA NMHP rates:
                    </h2>
                    <table>
                        <thead>
                            <tr>
                            <td>Suport Role</td>
                            <td>Rate</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Specialist Mentor - AS</td>
                            <td>£50</td>
                            </tr>
                            <tr>
                            <td>Specialist Mentor - MH</td>
                            <td>£50</td>
                            </tr>
                        </tbody>
                    </table>
                    </div>
                </section>

                <section id="first" className="spotlight">
                    <div className="image">
                    <img src={pic5} alt="" />
                    </div>
                    <div className="content">
                    <p>
                        We can provide support at the best place to meet the student's needs and make sure it is as accessible as possible.
                    </p>
                    <ul>
                        <li>In Person at the student's University or College</li>
                        <li>Online via video link or by phone</li>
                    </ul>
                    </div>
                </section>

            </section>
        </div>

    )
}

export default q