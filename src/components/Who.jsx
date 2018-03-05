import {Component} from "react";
import Guy from "./Guy";
import React from "react";

class Who extends Component {

    render() {
        return (<div>
                <h1> Knowledge & <em>Experience</em> </h1>
                <Guy/>
                <h3>Nick Meiremans</h3>
                <p> Passionate & driven software developer</p>
            </div>
        )
    }
}

export default Who