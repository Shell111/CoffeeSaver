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
  // const [value, onChange] = useState(new Date());
  const [date, setDate] = useState(new Date());

  const [amountInput, setAmountInput] = useState(""); 
  const [coffeeAmount, setCoffeeAmount] = useState("");

  // const [history, setHistory] = useState()


  // This sets the values in storage
  const [totalSaving, setTotalSaving] = useState(() => {
    const storedTotal = localStorage.getItem("total") 
    return storedTotal !== null ? JSON.parse(storedTotal) : 0
  })
  localStorage.setItem("total", totalSaving)


  let savingsToday = coffeeAmount * amountInput
  

  // function storeHistory(date, amount) {

  // }


  // To run clear storage
  const clearItem = () => {
    localStorage.removeItem("total");
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
      <h3 className="page__text">Today's savings: ${savingsToday}</h3>

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
      
      <ConfirmButton text={`Added to savings on ${date.toDateString()} $${savingsToday}`}
          onClick={(e) => {
          setTotalSaving(totalSaving + savingsToday)
        }
      }/>
      <Total totalSaving={totalSaving} />

      <div>
        <button className="clear-item" onClick={clearItem}>Clear balance</button>
      </div>
      
      <Footer/>
    </div>
  )
}
