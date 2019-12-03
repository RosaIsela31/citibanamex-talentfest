import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Pagare from '../../citicomponents/principalPage/Pagare';
import Tarjet from '../../citicomponents/principalPage/Tarjet';
import Footer from '../../citicomponents/principalPage/Footer';
import Iphone from '../../citicomponents/principalPage/Iphone';
import WithoutNetKey from '../../citicomponents/principalPage/WithoutNetkey';
import ChatBubble from '../../citicomponents/ChatBubble/index';


const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='container-general-first-page'>
      <section className='landing'>
        <div className='dark-overlay'>
          <div className='landing-inner'><br/><br/><br/><br/><br/><br/>
            <p className='lead'>
              Bienvenido a tu banco, ¡Queremos ayudarte!
            </p>
            <div className='buttons'>
              <Link to='/register' className='btn btn-primary'>
                Regístrate
              </Link>
              <Link to='/login' className='btn btn-light'>
                Inicia Sesión
              </Link>
            </div>
          </div>
            <div className='sidebar'>
              <div className='children-sidebar'>Obtén tu tarjeta</div>
              <div className='children-sidebar'>Realiza tu pago</div>
              <div className='children-sidebar'>Contáctanos</div>
            </div>
        </div>
      </section>
      <Pagare />
      <Iphone />
      <Tarjet />
      <WithoutNetKey />
      <Footer />
        <ChatBubble/>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);