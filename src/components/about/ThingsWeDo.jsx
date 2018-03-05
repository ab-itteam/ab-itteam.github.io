import React, {Component} from 'react';
import './ThingsWeDo.css'
import WindowsStyleButton from "./WindowsStyleButton";


class ThingsWeDo extends Component {
    render() {
        return (
            <div className="ThingsWeDoContainer">
                <div className="ThingsWeDo">
                    <h2>What exactly are we doing?</h2>
                    <p>We focus on the things we are extremely good at and find enjoyable:Analyzing, Coding,
                        Programming, Developing,...
                        Do you need SEA? Or create a social campaign? Thanks but no thanks. I am sure there are better
                        people out there.
                    </p>
                    <p>I do what I like to do: Creating efficient quality code. </p>


                    <div className="allSwitches">
                        <div className="excel">
                            <h2>Where we excel </h2>
                            <div className="thingsWeDoSwitches">
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={true}/><p>NodeJs & React</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={true}/><p>Ethereum & Solidity Smart Contract Development</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={true}/><p>Web, Desktop & Mobile Apps</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={true}/><p>Integrating external systems & API's</p>
                                </div>
                            </div>
                        </div>
                        <div className="notTea">
                            <h2>Not our cup of tea</h2>
                            <div className="ThingsWeDontDoSwitches">
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={false}/><p>Marketing,SEA, social media,...</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={false}/><p>.NET</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={false}/><p>Drupal</p>
                                </div>
                                <div className="thingsWeDoSwitch">
                                    <WindowsStyleButton checked={false}/><p>Forking Bitcoin/Litecoin/...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ThingsWeDo;