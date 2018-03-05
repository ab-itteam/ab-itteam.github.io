import React, {Component} from 'react';
import './Quote.css';


class Quote extends Component {

    render() {
        return (
            <div className="quoteWrapper">
                <article className="quoteContainer">
                    <blockquote>
                        <strong>Imagination</strong> is <em>more important</em> than <strong>knowledge</strong>
                    </blockquote>
                    <b>Einstein, A.</b>
                </article>
            </div>
        )
    }
}

export default Quote