import React from 'react';

const Alert = ({message}) => {
  return (
    <div className="container alert alert-danger alert-dismissible fade show" role="alert">
      <strong>{message}</strong> please try again later.
    </div>
  )
}

export default Alert;
