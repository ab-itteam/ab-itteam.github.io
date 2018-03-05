import React, {Component} from 'react';
import './FeaturedCase.css'
import TechnologiesEnum from "../../enums/TechnologiesEnum";

class FeaturedCase extends Component {
    render() {
        return (
                <div className="featuredCase">
                    <a href={this.props.data.url} target="_blank"><img src={this.props.data.image}/></a>
                    <h2>{this.props.data.title}</h2>
                    <div className="technologies">
                        {this.props.data.technologies.map((technology, i) => <span className="technologiesText">{TechnologiesEnum.properties[technology].name} </span>)}
                    </div>
                    <p>
                        {this.props.data.text}
                    </p>
                    <p>
                        {this.props.data.conclusion}
                    </p>
                </div>
                )}}
                export default FeaturedCase;
