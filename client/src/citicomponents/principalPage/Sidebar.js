import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <div className='options'>Cuentas de <br/> efectivo</div>
      <div className='options'>Tarjetas de <br/> crédito</div>
      <div className='options'>Créditos</div>
      <Link to={'/investments'}>
      <div className='options'>Inversiones</div>
      </Link>
      <div className='options'>Afore</div>
    </div>
  )
}

export default Sidebar;