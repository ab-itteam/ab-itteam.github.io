import React, {Component} from 'react';
import './About.css'
import AboutHero from "./AboutHero";
import ThingsWeDo from "./ThingsWeDo";
import FindUs from "./FindUs";


class About extends Component {
    render() {
        return (
            <div>
            <AboutHero/>
              <ThingsWeDo/>
                <FindUs/>
            </div>
        )
    }
}

export default About;