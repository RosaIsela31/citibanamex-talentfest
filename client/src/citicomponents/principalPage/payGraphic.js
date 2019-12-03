import React from 'react';
import createClass from 'create-react-class';
import {Pie} from 'react-chartjs-2';
import './style.css';

const data = {
	labels: [
		'Depósitos',
		'Retiros'
		
	],
	datasets: [
                {
		data: [63, 37],
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
  displayName: 'Grafica',

  render() {
    return (
      <div className="graficas">
         <div className="info">
		<div className="texto-izq">	 
        <h1 className="saldo">$1,780.00</h1>
		<p className="saldo-2">Saldo actual</p>
		<br/>
		<h2>63%</h2>
		<p className="saldo-2">Depósitos</p>
		<h2>37%</h2>
		<p className="saldo-2">Retiros</p>
		</div>	 
        </div> 

        <Pie data={data} />
      </div>
    );
  }
});