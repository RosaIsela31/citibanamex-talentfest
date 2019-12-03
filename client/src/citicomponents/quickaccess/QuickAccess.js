//import React, { Component } from 'react';
// import card from '../../img/citi-card-card.svg';
// import bills from '../../img/citi-document-document-payables.svg';
// import promo from '../../img/citi-ecommerce-tag.svg';
// import bankstatements from '../../img/citi-document-document-form.svg';
// import arrowUp from '../../img/citi-direction-arrow-up.svg';
// import arrowDown from '../../img/citi-direction-arrow-down.svg';
// import proofPayment from '../../img/citi-document-document-check.svg';
// import './style.css';

// import Balance from '../balance/balance.js'; //componente
// import Navbar from '../nabvar/nabvar.js'; //componente


// class QuickAccess extends Component{
//     render(){
//       return(
        
//         <section className="accesos">
//          <Navbar/>       
//         <div className="fila1">
//         <button className='box-blue'>
//             {/* <img className='icons' src={card} alt="card"/> */}
//             <p>Pagar tarjeta de crédito</p>
//         </button>
//         <button className='box-blue'>
//                 {/* <img className='icons' src={bankstatements} alt="bankstatements"/> */}
//                 <p>Estados de cuenta</p>
//         </button>
//         <button className='box-blue'>
//                 {/* <img className='icons' src={bills} alt="bills"/> */}
//                 <p>Pago de servicios</p>
//         </button>

//         </div>
//         <div className="fila1">
//         <button className='box-blue'>
//                 {/* <img className='icons' src={bankstatements} alt="bankstatements"/> */}
//                 <p>Movimientos de BancaNet</p>
//         </button>
//         <button className="box-blue">
//             {/* <img className='icons' src={card} alt="card"/> */}
//             <p>Comprobante de banco interbancario(CEP)</p>
//         </button>

//         <button className='box-blue'>
//                 {/* <img className='icons' src={bankstatements} alt="bankstatements"/> */}
//                 <p>Ofertas Citibanamex</p>
//         </button>

//         </div>
//         <Balance/>
//         </section>


//       )
//     }
//   }
  
//   export default QuickAccess;

import React from 'react';
import createClass from 'create-react-class';

import {Pie} from 'react-chartjs-2';

const data = {
	labels: [
		'Ahorro',
		'Inversión',
		'Gastos'
	],
	datasets: [
                {
		data: [60, 10, 30],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

export default createClass({
  displayName: 'PieExample',

  render() {
    return (
      <div>
        <h2>Tus finanzas</h2>
        <p>Tus gastos representan el 30%</p>
        <p>Tus ahorros representan el 60%</p>
        <p>Tus nversiones representan el 10%</p>

        <Pie data={data} />
      </div>
    );
  }
});