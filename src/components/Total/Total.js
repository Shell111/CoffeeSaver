

import './Total.css'

export function Total({totalSaving}){

  return(
    <div className="total">
      <div className="total__section">
        <h2 className="total__section--title page__text">Amazing work!<br></br>You've saved:</h2>
        <h3 className="total__section--amount page__text">${totalSaving}</h3>
      </div>
    </div>
  )
}


