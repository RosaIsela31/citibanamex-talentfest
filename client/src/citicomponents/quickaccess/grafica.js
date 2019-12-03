import React from 'react';
import createClass from 'create-react-class';
import {Pie} from 'react-chartjs-2';
import './style.css';

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
  displayName: 'Grafica',

  render() {
    return (
      <div className="graficas">
         <div className="info">
        <h1>Tus finanzas</h1>
        <p>Tus gastos representan el 30%</p>
        <p>Tus ahorros representan el 60%</p>
        <p>Tus inversiones representan el 10%</p>
        </div> 

        <Pie data={data} />
      </div>
    );
  }
});