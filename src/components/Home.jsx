import React, {Component} from 'react';
import Hero from "./Hero";
import ScrollDown from "./ScrollDown";
import Services from "./Services";
import CurlyBrace from "./CurlyBrace";
import Who from "./Who";
import Contact from "./Contact";
import HighlightedProject from "./HighlightedProject";
import Quote from "./Quote";
import Badge from "./Badge";
import {Helmet} from "react-helmet";


class Home extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>AB-IT | Everything For Blockchain & IT</title>
                    <link rel="canonical" href="https://ab-it.io" />
                    <meta name="description" content="We skillfully forge your IT solutions with Ethereum, NodeJs & React." />
                    <meta property="og:type" content="article" />
                    <meta property="og:url"  content="https://ab-it.io" />
                    <meta property="og:image" content="http://example.com/images/image.jpg" />
                </Helmet>
                <Hero/>
                <ScrollDown/>
                <Services/>
                <CurlyBrace data={{inverted: false}}/>
                <Who/>
                <CurlyBrace data={{inverted: true}}/>
                <Contact/>
                <HighlightedProject/>
                <Quote/>
                <Badge/>
            </div>
        )
    }
}

export default Home