import React from 'react';
import './style.css';
import chevron-down from '../../img/'

class SectionWhatToConsult extends React.Component{

    render(){
        return(
            <section className = "section-consult">
                <p>{this.props.text}</p>
                <a><img /></a>
            </section>
        );
    }
}


export default SectionWhatToConsult