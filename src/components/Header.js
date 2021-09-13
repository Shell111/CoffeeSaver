

import './Header.css'
import coffee_saver from '../images/coffee_saver.png'

export function Header(){
  return(
    <div className="header">
      <div className="header__nav">
        <img src={coffee_saver} alt="" />
        <p>text</p>
      </div>
    </div>
  )
}
