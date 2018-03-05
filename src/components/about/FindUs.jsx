import React, {Component} from 'react';
import './FindUs.css'
import events from './../../content/events'
import Event from "./Event";
import allCases from "../../content/cases";

let futureEvents = [];
let pastEvents = [];
class FindUs extends Component {

    componentWillMount() {
        futureEvents = [];
        pastEvents = [];
        events.map((event, i) => {
            if(event.date > Date.now()){
                futureEvents.push(event);
            }else{
                pastEvents.push(event);
            }
        });
    }

    render() {
        return (
            <div>
                <div className="findUsContainer">
                    <h2>Find us at these events</h2>
                    <p>We are very active on events, here is our calender:</p>
                    <div className="findUsEventsFuture">
                        {futureEvents.map((futureEvent, i) => <Event event={futureEvent} key={i}/>)}
                    </div>
                    <h4>Past events</h4>
                    <div className="findUsEventsPast">
                        {pastEvents.map((pastEvents, i) => <Event event={pastEvents} key={i}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

export default FindUs;