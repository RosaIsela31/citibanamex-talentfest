import React from 'react';
import SectionWhatToConsult from '../sectionWhatToConsult/index';

class WhatToConsult extends React.Component{


    render(){
        return(
            <section>
                <h3>¿Que deseas consultar?</h3>
                <SectionWhatToConsult text = "Cuentas de efectivo (4)"/>
                <SectionWhatToConsult text = "Tarjetas de crédito (3)"/>
                <SectionWhatToConsult text = "Créditos (3)"/>
                <SectionWhatToConsult text = "Inversiones (3)"/>
                <SectionWhatToConsult text = "AcciTrade"/>
                <SectionWhatToConsult text = "Afore(1)"/>
                <SectionWhatToConsult text = "Recompensas Citibanamex (2)"/>

            </section>
        );

    }
}


export default WhatToConsult