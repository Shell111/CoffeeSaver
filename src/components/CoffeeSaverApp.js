import './Layout.css'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import './Total.css'
import './DarkMode.css'

import React, { useState } from 'react';

import { Header } from './Header'
import { Intro } from './Intro'
import { InputAmount } from './InputAmount'
import Calendar from 'react-calendar'
import { ConfirmButton } from './ConfirmButton'
import { Total } from './Total'
import { CoffeeInput } from './CoffeeInput'
import DarkMode from './DarkMode'
import { Footer } from './Footer';


export function CoffeeSaverApp(){
  const [date, setDate] = useState(new Date());
  const [amountInput, setAmountInput] = useState(0); 
  const [coffeeAmount, setCoffeeAmount] = useState(0);

  // This sets the values in storage
  const [data, setData] = useState(() => {
    const storedTotal = localStorage.getItem("total") 
    return storedTotal !== null ? JSON.parse(storedTotal) : []
  })

  let savingsToday = coffeeAmount * amountInput

  // This calculates the coffee price and quantity 
  let sum = 0 
  data.forEach(item => {
    const value = item.coffeeAmount * item.amountInput 
    sum = sum + value
  })
  console.log(sum)
  

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
  console.log(data)

  // This will reset state and inputs to 0
  function resetState() {
    setAmountInput(0)
    setCoffeeAmount(0)
  }


  // To run clear storage
  const clearItem = () => {
    localStorage.removeItem("total");
    setData([])
    resetState()
  }

  // This converts date format
  const onDateChange = (newDate) => {
    setDate(newDate);
    console.log(newDate.toDateString());
  }


  return(
    <div className="page page__dark ">

      <DarkMode/>
      <Header />
      <Intro/>
      <InputAmount
        amountInput={amountInput}
        onChange={(e) => setAmountInput(e.target.value)}
      />
      <CoffeeInput 
        coffeeAmount={coffeeAmount}
        onChange={(e) => setCoffeeAmount(e.target.value)}  
      />
      <p className="intro__section--subcopy page__text">{`Saving $${savingsToday} on ${date.toDateString()}`}</p>

      <main className="calendar__section" >
          <Calendar className="react-calendar react-calendar__viewContainer react-calendar_custom" 
            // onChange={onChange}
            // showWeekNumbers
            // value={value}
            onChange={onDateChange}
            showWeekNumbers
            value={date}
          />
      </main>
      
      <ConfirmButton text={`Add to savings`}
          onClick={(e) => {
            updateData(amountInput, coffeeAmount, date)
          // setTotalSaving(totalSaving + savingsToday)
          }
        }
      />
      <Total totalSaving={sum} />

      <div>
        <button className="clear-item" onClick={clearItem}>Clear balance</button>
      </div>

      <Footer/>
    </div>
  )
}
