import React, {Component} from 'react';
import CasesHero from "./CasesHero";
import OtherCase from "./../OtherCase";
import allCases from "./../../../content/cases";
let filteredCases = [];


class Cases extends Component {


    componentWillMount() {
        filteredCases = [];
      const toBeFiltered =  this.props.technology;
        allCases.map((seperateCase, i) => {
            let technology = seperateCase.technologies.filter(technology => technology === toBeFiltered);
            console.log(technology);
            if(technology.length > 0){
                filteredCases.push(seperateCase);
            }
        });
    }

    render() {
        return (
            <div>
                <CasesHero technology={this.props.technology}/>
                <div className="otherCases">
                    {filteredCases.map((seperateCase, i) => <OtherCase data={seperateCase} key={i}/>)}
                </div>
            </div>
        )
    }
}

export default Cases

