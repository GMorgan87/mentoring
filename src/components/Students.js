import React from 'react'
import pic1 from '../assets/images/Why_Counselling.jpg';
import pic2 from '../assets/images/Is_Your_Child.jpg';
import pic3 from '../assets/images/CH_Counselling.jpg';


const q = () => {
  return (
        <div>
            {/* <section id="one" className="wrapper style1 special">
                <div className="inner">
                    <header className="major">
                    <h2>
                        Support Provided
                    </h2>
                    <p>
                        We provide two types of Specialist Mentor Support, both aimed at empowering students and promoting equal access to education,
                        Specialist Mental Health Mentoring and Specialist Autism Mentoring.
                    </p>
                    <h2>
                        How Mentoring Works
                    </h2>
                    <p>
                        We work with students who experience significant and long-term impacts from a disability,
                        health condition, sensory impairment or mental health condition.
                        We support students develop strategies to address barriers hindering their learning and promote independence and self-management.
                    </p>
                    </header>
                </div>
            </section> */}

            <section id="two" className="wrapper alt style2">
                <section id="about" className="spotlight">
                    <div className="image">
                        <img src={pic1} alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            Support Provided
                        </h2>
                        <p>
                            We provide two types of Specialist Mentor Support, both aimed at empowering students and promoting equal access to education,
                            Specialist Mental Health Mentoring and Specialist Autism Mentoring.
                        </p>
                        <h2>
                            How Mentoring Works
                        </h2>
                        <p>
                            We work with students who experience significant and long-term impacts from a disability,
                            health condition, sensory impairment or mental health condition.
                            We support students develop strategies to address barriers hindering their learning and promote independence and self-management.
                        </p>
                    </div>
                </section>

                <section id="about" className="spotlight">
                    <div className="image">
                        <img src={pic1} alt="" />
                    </div>
                    <div className="content">
                        <p>
                            Support is provided in the following areas:
                        </p>
                        <ul>
                            <li>Emotional & academic support for those experiencing persistent mental health conditions</li>
                            <li>Managing risk & crisis support</li>
                            <li>Motivation & goal-setting</li>
                            <li>Self-help & self-management strategies in dealing with mental health issues</li>
                            <li>Study skills support including perfectionism & procrastination</li>
                            <li>Time management & planning</li>
                            <li>Stress management, mindfulness, dealing with panic attacks, phobias etc</li>
                            <li>Confidence building & social skills</li>
                            <li>Support to create work/life balance and prioritise workload</li>
                            <li>Specialist autism support including managing sensory difficulties, social integration & communication</li>
                        </ul>
                    </div>
                </section>

                <section id="outdoor" className="spotlight">
                    <div className="image">
                        <img src={pic2} alt="" />
                    </div>
                    <div className="content">
                        <h2>How do I access this support?</h2>
                        <p>
                            The support we provide is usually funded through Disabled Student Allowances (DSA).
                            If you would like to know more about whether you are eligible for DSA,
                            it’s best to speak with your Disability Advisors based at your place of study.
                            They will be able to tell you what sort of help is available and how you can access it.
                        </p>
                        <p>
                            DSA is available to both full-time and part-time students.
                            You may apply for DSA even if you have already taken a higher education course,
                            although you can’t apply for more than one at a time.
                        </p>
                        <p>
                            To find out more click here:
                        </p>
                        <p>
                            SAAS funded students: <a href="https://www.saas.gov.uk/forms/dsa">https://www.saas.gov.uk/forms/dsa</a>
                        </p>
                        <p>
                            SPE funded students: <a href="https://www.yourdsa.com/">https://www.yourdsa.com/</a>
                        </p>
                    </div>
                </section>

                <section id="why" className="spotlight">
                    <div className="image">
                        <img src={pic3} alt="" />
                    </div>
                    <div className="content">
                        <h2>
                            What Happens Next? 
                        </h2>
                        <p>
                            Once your application for the Disabled Students' Allowance (DSA) has been accepted,
                            the funding provider may ask you to book a Study Needs Assessment.
                            The cost of this assessment is paid through the Disabled Students' Allowances.
                            The Study Needs Assessment is an informal meeting with an experienced Needs Assessor
                            to help decide the kind of support that will assist you with your own particular needs.
                        </p>
                        <p>
                            <a href="https://www.yourdsa.com/study-needs-assessment">https://www.yourdsa.com/study-needs-assessment</a>
                        </p>
                        <p>
                            The recommendations outlined within your Needs Assessment Report,
                            will determine the type and frequency of support you can access
                        </p>
                        <div>
                            <div>To arrange your support, we will require the following information:</div>
                            <ul>
                                <li>A copy of the authorisation letter from your funding body e.g (SAAS)</li>
                                <li>A copy for your course timetable will also be helpful for planning support</li>
                            </ul>
                            <br/>
                            <p>
                                The information can be sent to us by email or by completing this online form. (make a link)?
                                As soon as we have received your information, we will match you with a support worker.
                                The support worker will be given your contact details and will contact you to arrange an initial meeting.
                                Please note, support is always delivered during term time only.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

)
}

export default q