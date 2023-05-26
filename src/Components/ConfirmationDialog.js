import React from 'react'

const ConfirmationDialog = ({ message, onConfirm, onCancel }) => {
    return (
      <div className="confirmation-dialog">
        <p>{message}</p>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    );
  };

export default ConfirmationDialog