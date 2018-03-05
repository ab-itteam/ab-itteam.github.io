import React, {Component} from 'react';
import './OtherCase.css'
import TechnologiesEnum from'../../enums/TechnologiesEnum';

class OtherCase extends Component {

    render() {
        console.log(this.props.data);
        return (
            <div className="otherCase">
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
                {this.props.data.externalUrls.map((link, i) => <div><a href={link.url} key={i}>{link.text}</a> <br/></div>)}
                <br/>
            </div>
        )}}
        export default OtherCase;
