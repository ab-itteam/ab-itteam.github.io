import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import createHistory from 'history/createBrowserHistory'
import ReactGA from 'react-ga';
import Home from "./components/Home";
import Cases from "./components/cases/Cases";
import NavBar from "./components/NavBar";
import Guy from "./components/Guy";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Policy from "./components/privacy/Policy";
import ScrollToTop from "./components/routerComponents/ScrollToTop";
import Tos from "./components/tos/Tos";
import FilteredCases from "./components/cases/filteredCases/Cases"
import TechnologiesEnum from "./enums/TechnologiesEnum";

import { PropsRoute, PublicRoute, PrivateRoute } from 'react-router-with-props';
import {Helmet} from "react-helmet";


const history = createHistory();


ReactGA.initialize('UA-35827919-7');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

    render() {
        return (

            <Router>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>AB-IT | Anything for Blockchain & IT</title>
                        <link rel="canonical" href="https://ab-it.io" />
                    </Helmet>
                    <NavBar/>
                    <ScrollToTop>
                    <div className="App">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/cases" component={Cases}/>
                        <Route path="/about" component={About}/>
                        <Route path="/guy" component={Guy}/>
                        <Route path="/privacy" component={Policy}/>
                        <Route path="/tos" component={Tos}/>
                        <PropsRoute exact path="/cases/ethereum" component={FilteredCases} technology= {TechnologiesEnum.ETHEREUM} />
                        <PropsRoute exact path="/cases/nodejs" component={FilteredCases} technology= {TechnologiesEnum.NODEJS} />
                        <PropsRoute exact path="/cases/react" component={FilteredCases} technology= {TechnologiesEnum.REACT} />
                    </div>
                    </ScrollToTop>
                    <Footer/>
                </div>
            </Router>

        );
    }
}

export default App;
