import React from 'react'
import graphic from '../../img/graphic.png';
import PayGraphic from './payGraphic.js';


const Graphic = () => {
  return (
    <div>
      <div className='container-forgraph'>
        <PayGraphic/>
        {/* <div className='balances-graph'><b>$3,550.00</b></div>
          <img alt='graph' src={graphic} className='graphic'/> */}
      </div>
      <div className='div-table'> <br/>
        Últimos movimientos
        <table class="table-container">
          <tr>
            <th className='width-cel'><pre>Concepto                </pre> </th>
            <th className='width-cel'><pre>                   Fecha</pre></th>
            <th className='width-cel'><pre>                    Monto</pre></th>
          </tr>
          <tr>
            <td className='width-cel'><pre>Retiro                   </pre></td>
            <td className='width-cel'><pre>                  3/12/2019</pre></td>
            <td className='width-cel'><pre>                  $ 7,500</pre></td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Graphic;
