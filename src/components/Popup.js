

  export function Popup({ clearItemTrue, clearItemFalse }) {
    return (
      <div className="modal">
        <div className="modal_box">
          <p>Are you sure?</p>
          <button className="modal_buttonConfirm" onClick={clearItemTrue}>Yes</button>
          <button onClick={clearItemFalse} className="modal_buttonCancel">
            No
          </button>
        </div>
      </div>
    );
  }