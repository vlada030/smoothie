import React from 'react';

import { useGlobalContext } from '../context';

const Modal = React.memo(props => {

  const {closeModal} = useGlobalContext();

  return (
    <React.Fragment>
      <div className="backdrop" onClick={closeModal} />
      <div className="Modal">
        <h2>Došlo je do greške!</h2>
        <div className="modal-actions">
          <button type="button" className="btn" onClick={closeModal}>
            Okay
          </button>
        </div>
      </div>
    </React.Fragment>
  );
});

export default Modal;