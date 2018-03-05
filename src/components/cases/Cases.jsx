import React, {Component} from 'react';
import CasesHero from "./CasesHero";
import FeaturedCase from "./FeaturedCase";
import OtherCase from "./OtherCase";

import afspraakmanagerPreview from '../../images/afspraakmanger.png';
import horsecoinPreview from '../../images/horsecoin.png';
import bbowPreview from '../../images/bbow.png';
import surplacePreview from '../../images/surplaceVZW.png';
import medibibPreview from '../../images/medibib.png';
import medibibAPPreview from '../../images/app-phone.png';
import cryoPreview from '../../images/cryo.png';
import myosotisPreview from '../../images/myosotis.png';
import bluebearPreview from '../../images/Bluebear.jpeg';
import maisonLuxPreview from '../../images/maisonlux.jpg'


import TechnologiesEnum from '../../enums/TechnologiesEnum';
import cases from './../../content/cases';

import './Cases.css'
import allCases from "../../content/cases";
import {Helmet} from "react-helmet";


let featuredCases = [];
let unFeaturedCases = [];

class Cases extends Component {

    componentWillMount() {
        featuredCases = [];
        unFeaturedCases = [];
        cases.map((seperateCase, i) => {
            if(seperateCase.featured){
                featuredCases.push(seperateCase);
            }else{
                unFeaturedCases.push(seperateCase);
            }
        });
        console.log(featuredCases);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>AB-IT | Our Showcase</title>
                    <link rel="canonical" href="https://ab-it.io/cases" />
                    <meta name="description" content="Our Projects based on Blockhain, NodeJs, Java, React, ..." />
                    <meta property="og:type" content="article" />
                    <meta property="og:url"  content="https://ab-it.io/cases" />
                    <meta property="og:image" content="http://example.com/images/image.jpg" />
                </Helmet>
                <CasesHero/>
                <div className="casesBody">
                    <div className="featuredCases">
                        {featuredCases.map((seperateCase, i) => <FeaturedCase data={seperateCase} key={i}/>)}
                    </div>
                </div>
                <div className="otherCases">
                    {unFeaturedCases.map((seperateCase, i) => <OtherCase data={seperateCase} key={i}/>)}
                </div>
            </div>
        )
    }
}

export default Cases

