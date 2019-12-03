import React from 'react';
import './style.css';

class SectionWhatToConsult extends React.Component{

    render(){
        return(
            <section className = "section-consult">
                <p>{this.props.text}</p>
                <a><img href = "" /></a>
            </section>
        );
    }
}


export default SectionWhatToConsult