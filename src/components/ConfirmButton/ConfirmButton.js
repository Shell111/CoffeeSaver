import './ConfirmButton.css'

export function ConfirmButton({onClick, text}){

  return(
    <div className="button">
      <div className="confirm__button">
        <button className="confirm__button--btn " onClick={() =>{
          onClick()
        }} >{text} </button>
      </div>
    </div>
  )
}
