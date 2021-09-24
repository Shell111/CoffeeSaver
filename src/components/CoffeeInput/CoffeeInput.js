
import '../InputAmount/InputAmount.css'

export function CoffeeInput({coffeeAmount, onChange}){

  return(
    <div>
      <p className="input__label-text page__text">How many coffees?</p>
      <div className="input__section">
          <input value={coffeeAmount} 
            onChange={onChange} 
            className="input__section--field" 
            type="number" 
            aria-label="How many coffees saved?"
            placeholder="How many coffees saved?"
            min="0" 
          />

      </div>

    </div>
  )
}