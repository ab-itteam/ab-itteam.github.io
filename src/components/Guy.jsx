import React, {Component} from 'react';
import './Guy.css';


class Guy extends Component {

    render() {
        return (
                <div className="wrapper" onClick={ () => {window.open("https://www.linkedin.com/in/meiremans/", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes')}}>

                    <div className="border-circle" id="one"></div>
                    <div className="border-circle" id="two"></div>
                    <div className="background-circle">
                        <div className="triangle-light"></div>
                        <div className="body"></div>
                        <span className="shirt-text">A</span>
                        <span className="shirt-text">B</span>
                        <span className="shirt-text">-</span>
                        <span className="shirt-text">I</span>
                        <span className="shirt-text">T</span>
                        <div className="triangle-dark"></div>
                    </div>
                    <div className="head">
                        <div className="ear" id="left"></div>
                        <div className="ear" id="right"></div>
                        <div className="hair-main">
                            <div className="sideburn" id="left"></div>
                            <div className="sideburn" id="right"></div>
                        </div>
                        <div className="face">
                            <div className="hair-bottom"></div>
                            <div className="eye-shadow" id="left">
                                <div className="eyebrow"></div>
                                <div className="eye"></div>
                            </div>
                            <div className="eye-shadow" id="right">
                                <div className="eyebrow"></div>
                                <div className="eye"></div>
                            </div>
                            <div className="mouth"></div>
                        </div>
                    </div>
                    <span className="music-note" id="one">&#9733;</span>
                    <span className="music-note" id="two">&#9733;</span>
                </div>)
    }
}

export  default Guy