
import './InputAmount.css'


export function InputAmount({amountInput, onChange}){

  return(
    <div className="input">

      <div className="input__section">

          <input value={amountInput} 
            onChange={onChange} 
            className="input__form--field" 
            type="number" 
            placeholder="Enter amount here"
          />
          <p>${amountInput}</p>

          
      </div>

    </div>
  )
}