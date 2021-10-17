import React from 'react';
import NeedsAssessors from '../components/NeedsAssessors'
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import config from '../../config';
import ContactUs from '../components/ContactUs';

const IndexPage = () => {

 return <Layout main={true}>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>
    {/* <NeedsAssessors/> */}
    <ContactUs/>
  </Layout>
};

export default IndexPage;
