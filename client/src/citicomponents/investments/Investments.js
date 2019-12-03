import React from 'react'
import Sidebar from '../../citicomponents/principalPage/Sidebar';
import barras from '../../img/barras.png';

const Investments = () => {
  return (
    <div className='container-investments'>
      <Sidebar /> 
      <div className='second-container-investments'>
        <div className='container-barrasanddiv'>
        <br/><br/>
          <div className='money-actual'>
            <h1>$ 8,980.37</h1> <br/>
            <h4>Saldo actual</h4>
          </div>
          <img alt='barras'  src={barras} className='barras'/>
        </div> <br/>
        <div>
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
          <tr>
            <td className='width-cel'><pre>Interés                  </pre></td>
            <td className='width-cel'><pre>                  2/12/2019</pre></td>
            <td className='width-cel'><pre>                 $ 152.56</pre></td>
          </tr>
          <tr>
            <td className='width-cel'><pre>Retiro                   </pre></td>
            <td className='width-cel'><pre>                  1/12/2019</pre></td>
            <td className='width-cel'><pre>                  $ 6,500</pre></td>
          </tr>
        </table>
        </div>
      </div>
    </div>
  )
}

export default Investments;
