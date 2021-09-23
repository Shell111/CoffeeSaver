import './Footer.css'
import {
  Link
} from "react-router-dom";

export function Footer() {

  const year = new Date().getFullYear()
  return(
    <div className="footer">
      <nav className="footer__nav">
        <p className="footer__text page__text" >&copy; {year}</p>
        <Link className="footer__links page__text" to="/history">View history</Link>
        <Link className="footer__links page__text" to="/about">About</Link>
        <Link className="footer__links page__text" to="/">Home</Link>
      </nav> 
    </div>
  )
}