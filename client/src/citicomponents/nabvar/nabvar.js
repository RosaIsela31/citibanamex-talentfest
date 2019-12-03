import React, { Component } from 'react';
import './style.css';



class Navbar extends Component {
    render(){
        return(
            <section className="nav">
                <ul>
                    <li>Cuentas</li>
                    <li>Transferencias y pagos</li>
                    <li>Inversiones</li>
                    <li>Otros productos</li>
                    <li>Configuración</li>
                </ul>
               

            </section>

        )
    }

}
export default Navbar;