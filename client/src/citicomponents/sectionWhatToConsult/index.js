import React from 'react';
import './style.css';
import ChevronDown from '../../img/citi-direction-chevron-down.png';

class SectionWhatToConsult extends React.Component{

    render(){
        return(
            <section>
                <section className = "section-consult">
                <p>{this.props.text}</p>
                <a className = "chevron-down"><img src = {ChevronDown} /></a>
                <table className = "table-section-consult">
                    <caption></caption>
                        <tr>
                            <td>Nombre de la cuenta</td>
                             <td>Tipo de cuenta</td>
                             <td>       </td>
                             <td>importe</td>
                        </tr>
                         <tr>
                            <td>SoulRebel-Cheques-155</td>
                            <td>Cheques</td>
                            <td>Saldo:</td>
                            <td>MXN 1,111,234.00</td>
                        </tr>
                         <tr>
                            <td>CMaestra-Cta.Maestra-713</td>
                            <td>Perfiles/Maestra</td>
                            <td>Saldo:
                                Disponible:
                            </td>
                             <td> MXM 666,666.00</td>
                        </tr>
                        <tr>
                            <td>PAGÓMATICO INT-Mi pagómatico-MXN-594</td>
                            <td>Tarjeta de debito</td>
                            <td>Saldo:
                                Disponible:
                            </td>
                             <td> MXN 33,333.68</td>
                        </tr>
                        <tr>
                            <td>CHEQUES DOLARES-Cuenta de nomina</td>
                            <td>Cuenta de Cheques</td>
                            <td>Saldo:</td>
                             <td>USD 33,33.68</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td>Saldo Total</td>
                             <td>USD 33,333.68</td>
                        </tr>
                </table>
            </section>

            </section>
            
        );
    }
}


export default SectionWhatToConsult