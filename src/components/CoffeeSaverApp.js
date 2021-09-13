import './Layout.css'
import 'react-calendar/dist/Calendar.css';
import './Calendar.css'
import './Total.css'

import React, { useState } from 'react';

import { Header } from './Header'
import { Intro } from './Intro'
import { InputAmount } from './InputAmount'
import Calendar from 'react-calendar'
import { ConfirmButton } from './ConfirmButton'
import { Total } from './Total'
import { CoffeeInput } from './CoffeeInput'


export function CoffeeSaverApp(){
  const [value, onChange] = useState(new Date());

  const [amountInput, setAmountInput] = useState(0);
  const [coffeeAmount, setCoffeeAmount] = useState(0);
  const [totalSaving, setTotalSaving] = useState(0);

  let savingsToday = coffeeAmount * amountInput


  return(
    <div className="page">
      <Header/>
      <Intro/>
      <InputAmount
        amountInput={amountInput}
        onChange={(e) => setAmountInput(e.target.value)}
      />
      <CoffeeInput 
        coffeeAmount={coffeeAmount}
        onChange={(e) => setCoffeeAmount(e.target.value)}  
      />
      <p>Today's savings: {savingsToday}</p>


      <main >
          <Calendar className="react-calendar react-calendar__viewContainer react-calendar_custom" 
            onChange={onChange}
            showWeekNumbers
            value={value}
          />
        </main>

      <ConfirmButton text={'Added to savings today'}
          onClick={(e) => {
          setTotalSaving(totalSaving + savingsToday)
        }
      }/>
      <Total totalSaving={totalSaving} />

    </div>
  )
}
