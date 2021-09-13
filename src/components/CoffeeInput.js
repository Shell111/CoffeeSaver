import '../components/InputAmount.css'
import '../components/CoffeeInput.css'


export function CoffeeInput({coffeeAmount, onChange}){

  return(
    <div className="input">

      <div className="input__section">

          <input value={coffeeAmount} 
            onChange={onChange} 
            className="input__section--text" 
            type="number" 
            placeholder="How many coffees are you saving?"
          />
          <p className="input__section--text">Coffees: {coffeeAmount}</p>


      </div>

    </div>
  )
}