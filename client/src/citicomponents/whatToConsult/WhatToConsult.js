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


<iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/7e3891b3-2b9b-49f7-9575-6945e98b971d">
</iframe>

      

            </section>
        );

    }
}


export default WhatToConsult