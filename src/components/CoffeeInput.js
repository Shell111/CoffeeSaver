
import './InputAmount.css'

export function CoffeeInput({coffeeAmount, onChange}){

  return(
    <div className="input">

      <div className="input__section">
          <input value={coffeeAmount} 
            onChange={onChange} 
            className="input__section--field" 
            type="text" 
            aria-label="How many coffees saved?"
            placeholder="How many coffees saved?"
          />
          {/* <p className="input__section--text">Coffees: {coffeeAmount}</p> */}

      </div>

    </div>
  )
}