import './PopUp.css'

  export function PopUp({ clearItemTrue, clearItemFalse }) {
    return (
      <div className="modal">
        <div className="modal__container">
          <h4 className="page__text">Are you sure?</h4>
          <div className="modal-buttons__container">
            <button className="modal_buttonConfirm modal__button" 
              onClick={clearItemTrue}>
                Yes
            </button>
            <button className="modal_buttonCancel modal__button" 
              onClick={clearItemFalse}>
              No
            </button>
          </div>
        </div>
      </div>
    );
  }