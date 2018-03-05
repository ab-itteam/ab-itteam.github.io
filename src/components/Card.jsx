import React, {Component} from 'react';
import './Card.css';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faBook,faBuilding } from '@fortawesome/fontawesome-free-solid'
import Link from "react-router-dom/es/Link";
import TechnologiesEnum from "../enums/TechnologiesEnum";



class Card extends Component {

    render() {
        return (
            <div>
                    <div className="cardContainer">
                        <div className="card">
                            <div className="front">
                                <h2 className="sub-title">{this.props.data.subTitle}</h2>
                                <h1 className="title">{this.props.data.title}</h1>
                                <img
                                    className="image"
                                    src={this.props.data.image}
                                    alt=""/>
                            </div>
                            <div className="back">
                                <h3 className="synopsis"></h3>
                                <p>{this.props.data.content}</p>
                                <a href={this.props.data.readMoreURL}  target="_blank"> <div className="btn"><FontAwesomeIcon icon={faBook}/>Read More</div> </a>
                                <Link to={`/cases/${TechnologiesEnum.properties[this.props.data.ourProjectsTechTag].name}`}> <div className="btn secondary"><FontAwesomeIcon icon={faBuilding}/>Our Projects</div></Link>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Card