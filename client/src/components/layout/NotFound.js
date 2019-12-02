import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Página no encontrada
      </h1>
      <p className='large'>Perdón, esta página no existe</p>
    </Fragment>
  );
};

export default NotFound;