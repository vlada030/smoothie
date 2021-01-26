import React from 'react';

import { useGlobalContext } from '../context';

const Modal = React.memo(props => {

  const {modalMsg, showModal, closeModal} = useGlobalContext();
  const classToggler = showModal ? 'modal-container show' : 'modal-container';

  return (
      <div className={classToggler} >
        <div className="modal">
          {/* <h3>Došlo je do greške!</h3> */}
          <h3>Error happened!</h3>
          <p>{`Error: ${modalMsg}`}</p>
          <div className="modal-actions">
            <button type="button" className="btn btn-danger" onClick={closeModal}>
              Okay
            </button>
          </div>
        </div>

      </div>
  );
});

export default Modal;