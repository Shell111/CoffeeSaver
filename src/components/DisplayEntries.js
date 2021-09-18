
export function DisplayEntries(data) {

  return(
    <div>
      <h3>Coffees saved:</h3>
      {data.map((entry,i) => {
        return <p key={i}>{`Transaction on: ${entry.date}, price: $${entry.amountInput}, coffee quantity ${entry.coffeeAmount}`}
        </p>
      })
    } 
    </div>
  )
}