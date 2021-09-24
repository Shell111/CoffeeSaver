import './Layout.css'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import './DarkMode/DarkMode.css'

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { Header } from './Header/Header'
import { Intro } from './Intro/Intro'
import { InputAmount } from './InputAmount/InputAmount'
import Calendar from 'react-calendar'
import { ConfirmButton } from './ConfirmButton/ConfirmButton'
import { Total } from './Total/Total'
import { CoffeeInput } from './CoffeeInput/CoffeeInput'
import DarkMode from './DarkMode/DarkMode'
import { Footer } from './Footer/Footer';
import { DisplayEntries } from './DisplayEntries/DisplayEntries';
import { About } from './About/About'
import { PopUp } from './PopUp/PopUp'


export function CoffeeSaverApp(){
  const [date, setDate] = useState(new Date());
  const [amountInput, setAmountInput] = useState(0); 
  const [coffeeAmount, setCoffeeAmount] = useState(1);
  const [popUp, setPopUp] = useState({
    show: false, // initial values set to false and null
  });


  // This sets the values in storage
  const [data, setData] = useState(() => {
    const storedTotal = localStorage.getItem("total") 
    return storedTotal !== null ? JSON.parse(storedTotal) : []
  })

  // This gives a temporary total under the inputs of the amount being entered
  let savingsToday = Number(coffeeAmount) * Number(amountInput)

  // This calculates the coffee price and quantity 
  let sum = 0 
  data.forEach(item => {
    const value = item.coffeeAmount * item.amountInput 
    sum = sum + value
    console.log(sum)
  })
  

  // This sets the tempObject in local storage
  function updateData(amountInput, coffeeAmount, date,) {
  // Receive amountInput, coffeeAmount, date, 
  // Create an object with the received values
    const tempObject = {
      date,
      amountInput,
      coffeeAmount
    }
    const newArray = [...data, tempObject]
    setData(newArray)
    localStorage.setItem("total", JSON.stringify(newArray))
    resetState()
  }
  

  // This will reset state and inputs 
  function resetState() {
    setAmountInput(0)
    setCoffeeAmount(1)
  }


  // To run clear storage with Pop up to confirm
  const clearItemTrue = () => {
    setPopUp({
      show: true,
    })
    localStorage.removeItem("total");
    setData([])
    resetState()
    setPopUp({
      show: false,
    })
  }

  const clearItemFalse = () => {
    setPopUp({
      show: false,
    })
  }

  const clearItem = () => {
    setPopUp({
      show: true,
    });
  };

  // This converts date format
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate.toDateString());
  }


  return(
    <Router>
      <div className="page page__dark ">

        <DarkMode/>
        <Header />
        <Switch>
          <Route exact path="/">
            <div>
              <Intro/>
              <InputAmount
                amountInput={amountInput}
                onChange={(e) => setAmountInput(e.target.value)}
              />
              <CoffeeInput 
                coffeeAmount={coffeeAmount}
                onChange={(e) => setCoffeeAmount(e.target.value)}  
              />
              <p className="intro__section--subcopy page__text">{`Saving $${savingsToday.toFixed(2)} on ${date.toDateString()}`}</p>

              <main className="calendar__section" >
                  <Calendar className="react-calendar react-calendar__viewContainer react-calendar_custom" 
                    onChange={onDateChange}
                    showWeekNumbers
                    value={date}
                  />
              </main>
              
              <ConfirmButton text={`Add to savings`}
                  onClick={(e) => {
                    updateData(amountInput, coffeeAmount, date)
                  }}
              />
              <Total totalSaving={sum.toFixed(2)} />

              <div>
 
                <button className="clear-item" onClick={clearItem}>Clear balance</button>

                {popUp.show && (<PopUp
                  clearItemTrue={clearItemTrue}
                  clearItemFalse={clearItemFalse}
                  />
                )}
              </div>
            </div>

          </Route> 

          <Route path="/history"><div>{DisplayEntries(data)}</div> </Route>
          <Route path="/about">{About}</Route>

        </Switch>

        <Footer/>
      </div>
    </Router>
  )
}
