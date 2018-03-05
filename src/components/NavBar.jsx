import {Component} from "react";
import React from "react";
import './NavBar.css'
import abitLogo from '../images/ab-it.svg'
import {Link} from "react-router-dom";

class NavBar extends Component {
    state = {
        isTop: true,
    };

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({isTop})
            }
        });
    }

    render() {
        return (
            <div>
                <nav
                    className={this.state.isTop ? 'navbar navbar-default navbar-home navbar-fixed-top notScrolling' : 'navbar navbar-default navbar-home navbar-fixed-top scrolling'}
                    data-scroll-header="">
                    <Link to="/" className="NavBarActive">Home</Link>
                    <Link to="/cases">Cases</Link>
                    <Link to="/about">About us</Link>
                    <Link to="/guy">Guy</Link>
                    <a href="https://medium.com/ab-it">Blog</a>
                </nav>
            </div>)
    }
}

export default NavBar;