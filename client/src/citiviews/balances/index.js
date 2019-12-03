import React from 'react';
import WhatToConsult from '../../citicomponents/whatToConsult/WhatToConsult'



class Balances extends React.Component{

    render(){
        return(
            <section>
                {/* <HeaderCiti/>
                <HamburguerMenu/>
                <QuickAccess/> */}
                <WhatToConsult/>
             {/*    <advertisements/> */}
            </section>
        )
    }
}


export default Balances