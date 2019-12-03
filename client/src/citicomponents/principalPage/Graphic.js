import React from 'react'
import graphic from '../../img/graphic.png';


const Graphic = () => {
  return (
    <div>
      <div className='container-forgraph'>
        <div className='balances-graph'>$3,550.00</div>
          <img alt='graph' src={graphic} className='graphic'/>
      </div>
      <div>
        Últimos movimientos
        <table class="table-container">
          <tr>
            <th>Celda 1</th>
            <th>Celda 2</th>
            <th>Celda 3</th>
          </tr>
          <tr>
            <td>Celda 4</td>
            <td>Celda 5</td>
            <td>Celda 6</td>
          </tr>
        </table>
      </div>
    </div>
  )
}

export default Graphic;
