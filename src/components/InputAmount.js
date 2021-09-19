
import './InputAmount.css'


export function InputAmount({amountInput, onChange}){

  return(
    <div className="input__container">
      <p className="input__label-text page__text">Enter coffee price:</p>
      <div className="input__section">
        <input value={amountInput} 
          onChange={onChange} 
          className="input__section--field" 
          type="number" 
          placeholder="Enter amount here"
        />
          {/* <p>${amountInput}</p> */}
      </div>
    </div>
  )
}