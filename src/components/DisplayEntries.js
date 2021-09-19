
export function DisplayEntries(data) {

  let message = "Make sure you've saved some coffees in the app to view your history.";
  if (localStorage.getItem("totals") === "0") {
    console.log(message)
  }

  return(
    <div>
      <h3 className="history-title page__text">Coffees saved so far...</h3>
      <p className="page__text">{message}</p>
      
      {data.map((entry,i) => {
        return <p className="history__items page__text" key={i}>{`Transaction on: ${entry.date}, price: $${entry.amountInput}, coffees saved: ${entry.coffeeAmount}`}
        </p>
        
      })
    } 
    </div>
  )
}