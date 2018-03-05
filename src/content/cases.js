import afspraakmanagerPreview from '../images/afspraakmanger.png';
import horsecoinPreview from '../images/horsecoin.png';
import bbowPreview from '../images/bbow.png';
import surplacePreview from '../images/surplaceVZW.png';
import medibibPreview from '../images/medibib.png';
import medibibAPPreview from '../images/app-phone.png';
import cryoPreview from '../images/cryo.png';
import myosotisPreview from '../images/myosotis.png';
import bluebearPreview from '../images/Bluebear.jpeg';
import maisonLuxPreview from '../images/maisonlux.jpg';
import contentlyPreview from '../images/contently.png'

import TechnologiesEnum from'../enums/TechnologiesEnum';


let cases = [];
const case1 = {
    title : "Afspraakmanagager",
    url: "https://www.afspraakmanager.be",
    image : afspraakmanagerPreview,
    text : "Appointment system created for health care institutions",
    conclusion : "works for +7 years",
    externalUrls: [],
    technologies: [TechnologiesEnum.JAVA,TechnologiesEnum.JAVASCRIPT],
    featured : true
};


const case2 = {
    title : "Horsecoin ICO",
    url: "https://www.horsecoin.tech",
    image : horsecoinPreview,
    text : "Creating a website & Smart Contract code for a Crowdsale of an ICO? Sounds fun!",
    conclusion : "A perfect way to dive head first into Ethereum Smart Contract Development",
    externalUrls: [],
    technologies: [TechnologiesEnum.ETHEREUM,TechnologiesEnum.SOLIDITY],
    featured : true
};
const case3 = {
    title : "BBOW-APSO",
    url: "http://www.bbow-apso.be",
    image : bbowPreview,
    text : "User-based website for an association of doctors and therapists",
    conclusion : "BBOW connects doctors and therapist through our platform, let the share thoughts, opinions, ...",
    externalUrls: [],
    technologies: [TechnologiesEnum.WORDPRESS],
    featured : false
};

const case4 = {
    title : "Surplace",
    url: "http://www.surplacevzw.be/",
    image : surplacePreview,
    text : "Cyclists association with an integrated webshop",
    conclusion : "Events get announced on the site and interested people can buy tickets straight from the site",
    externalUrls: [],
    technologies: [TechnologiesEnum.WORDPRESS],
    featured : false
};


const case5 = {
    title : "Medibib",
    url: "https://www.medibib.be/",
    image : medibibPreview,
    text : "An online pharmacist webshop.",
    conclusion : "Medibib is a start-up selling pharma online. They reached out to us to create their platform.",
    externalUrls: [],
    technologies: [TechnologiesEnum.JAVASCRIPT,TechnologiesEnum.NODEJS, TechnologiesEnum.ANGULAR,TechnologiesEnum.MONGODB, TechnologiesEnum.ELASTICSEARCH],
    featured : false
};


const case6 = {
    title : "Medibib App",
    url: "https://www.medibib.be/app/",
    image : medibibAPPreview,
    text : "An app to scan your pharmaceuticals and get all the information about the product.",
    externalUrls: [
        {text: "This app got coverage in the Belgian news",url : "https://www.youtube.com/watch?v=esyEyPgXABM&index=6&list=PL2u_9d3Wos_qxXvqIm8kBGsPtxd79m61i"},
        {text:"This app got coverage on the Belgian radio", url: 'https://www.youtube.com/watch?v=LQhJ7C70ytU&index=7&list=PL2u_9d3Wos_qxXvqIm8kBGsPtxd79m61i'}],
    conclusion : "To make promotion for their platform, they gave us the assignment to create this app.",
    technologies: [TechnologiesEnum.JAVASCRIPT,TechnologiesEnum.NODEJS, TechnologiesEnum.CORDOVA,TechnologiesEnum.MONGODB, TechnologiesEnum.ELASTICSEARCH],
    featured : false
};


const case7 = {
    title : "Cryosauna",
    url: "http://www.cryosaunacenter.com/",
    image : cryoPreview,
    text : "Cryosauna center is a start-up offering an ice cold sauna experience. This website allows visitors to gain more information and to book their chilly sauna experience.",
    externalUrls: [],
    conclusion : "We just couldn't say no to this cool project.",
    technologies: [TechnologiesEnum.WORDPRESS],
    featured : false
};


const case8 = {
    title : "Myosotis",
    url: "http://www.myosotis.be/",
    image : myosotisPreview,
    text : "Myosotis is a big florist. Although he sold much in his store and trough phone, he didn't got much online sales. He asked us te remake the website and improve his conversion rate.",
    externalUrls: [],
    conclusion : "His conversion rate went up the moment our website went online!",
    technologies: [TechnologiesEnum.WORDPRESS],
    featured : false
};


const case9 = {
    title : "Bluebear",
    url: "https://www.bluebear.be/",
    image : bluebearPreview,
    text : "Bluebear is a start-up on getting activities to the people. Their platform allows everyone to book activities in their vicinity. They had a huge problem. Activity  providers use different ways to manage their bookings." +
    "They needed to link their platform to different calendar platforms.",
    externalUrls: [],
    conclusion : "We build a modular solution for them to link their platform to Google Calendar & Checkfront. With an easy way to add extra providers",
    technologies: [TechnologiesEnum.WORDPRESS, TechnologiesEnum.NODEJS, TechnologiesEnum.JAVASCRIPT, TechnologiesEnum.MONGODB,TechnologiesEnum.MYSQL],
    featured : false
};


const case10 = {
    title : "Maisonlux",
    url: "https://www.maisonlux.com/",
    image : maisonLuxPreview,
    text : "Maisonlux is a start-up selling exclusive interior decoration exclusively online. They came to us to set up their webshop.",
    externalUrls: [],
    conclusion : "We build a webshop reflecting their exclusive style",
    technologies: [TechnologiesEnum.WORDPRESS],
    featured : false
};

const case11 = {
    title : "Contently",
    url: "#",
    image : contentlyPreview,
    text : "Contently is a management application for Wordpress Sites. Deploy a new site straight out of contently and fill in the content through this webapp",
    externalUrls: [],
    conclusion : "Beautiful dashboard full of functionality",
    technologies: [TechnologiesEnum.REACT,TechnologiesEnum.NODEJS],
    featured : false
};

function initializeCases() {
    cases.push(case1);
    cases.push(case2);
    cases.push(case3);
    cases.push(case4);
    cases.push(case5);
    cases.push(case6);
    cases.push(case7);
    cases.push(case8);
    cases.push(case9);
    cases.push(case10);
    cases.push(case11);


    return cases;
}

export default initializeCases();
