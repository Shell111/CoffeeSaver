
export function DisplayEntries(data) {

  let messageNothingSaved = "Make sure you've saved some coffees in the app to view your history.";

  let messageItemsSaved = "Please see your saved entries below.";


  return(
    <div className="display-history">
      <h3 className="history-title page__text">Coffees saved so far...</h3>
      <p className="page__text">{!localStorage.getItem("total") ? messageNothingSaved : messageItemsSaved}</p>
      
      {data.map((entry,i) => {
        let dateFormat = new Date(entry.date)
        let dateDisplay = dateFormat.getFullYear()+'/'+(dateFormat.getMonth()+1)+'/'+dateFormat.getDate();

        return <p className="history__items page__text" key={i}>{`Transaction on: ${dateDisplay}, price: $${entry.amountInput}, coffees saved: ${entry.coffeeAmount}`}
        </p>
        
      })
    } 
    </div>
  )
}