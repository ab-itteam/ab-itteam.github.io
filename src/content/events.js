const event1 = {
    title: "Modex Hackathon, powered by SWAZM Protocol",
    date: new Date('2018-03-04'),
    link: "https://www.facebook.com/events/1961510667431191/",
    content: "Join us at the Modex Hackathon, powered by SWAZM Protocol, " +
    "to learn how distributed technology promises to disrupt and change the world as we know it."
};

const event2 = {
    title: "Let's Talk Tech & Startups #5",
    date: new Date('2018-02-22'),
    link: "https://www.facebook.com/events/201786187069207/",
    content: "Let's talk Tech & Startups no. 5 is here!\n" +
    "You are invited to come and discuss about Tech & Startups in a casual way"
};

const event3 = {
    title: "Let's Talk Tech & Startups",
    date: new Date('2017-11-23'),
    link: "https://www.facebook.com/events/183308222245999/",
    content: `I invite you to come and bring your friends interested in Tech and Startups and meet " +
    "for networking in the historical villa "Oromolu". It will be as usual, networking, informal tech discussions and beer.`
};
const event4 = {
    title: "IMWorld 2017",
    date: new Date('2017-10-04'),
    link: "https://www.facebook.com/events/107349889964608/",
    content: `Prepare your business for the digital invasion. Join the sixth IMWorld edition on 4-5 October at Romexpo, Bucharest.
IMWorld 2017 means 8,500+ business visitors, 130+ exhibiting companies, 140+ international & local speakers on 6 dedicated stages`
};
const event5 = {
    title: "IMWorld 2017",
    date: new Date('2017-10-05'),
    link: "https://www.facebook.com/events/107349889964608/",
    content: `Prepare your business for the digital invasion. Join the sixth IMWorld edition on 4-5 October at Romexpo, Bucharest.
    IMWorld 2017 means 8,500+ business visitors, 130+ exhibiting companies, 140+ international & local speakers on 6 dedicated stages`
};
const event6 = {
    title: "Fintech meetup: The opportunity of cryptocurrencies",
    date: new Date('2017-09-21'),
    link: "https://www.facebook.com/events/163289137559712",
    content: `On Thursday, September 21, it’s time to reinforce or shatter the hype: the 3rd Fintech Month panel will discuss about cryptocurrencies, 
    the blockchain technology surrounding them and what you should pay attention to among all the noise around the phenomenon`
};
const event7 = {
    title: "Google Cloud OnBoard();",
    date: new Date('2017-10-09'),
    link: "https://cloudplatformonline.com/2017-OnBoard-Bucharest.html",
    content: `Cloud OnBoard has been designed for IT Managers, Systems Engineers and Operations professionals, Developers, 
    Solution Architects and modern business leaders who are exploring cloud solutions or are new to Google Cloud Platform.`
};




function initializeEvents() {
    let events =[];
    events.push(event1);
    events.push(event2);
    events.push(event3);
    events.push(event4);
    events.push(event5);
    events.push(event6);
    events.push(event7);


    events.sort(function(a,b){
        let c = new Date(a.date);
        let d = new Date(b.date);
        return c+d;
    });

    return events;
}

export default initializeEvents();