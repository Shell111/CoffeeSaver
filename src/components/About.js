import './About.css'

export function About() {

  return(
    <div className="about">
      <h2 className="intro__section--heading  page__text">About Coffee Saver</h2>
      <div>
        <p className="about__desc page__text">This app idea came from the realisation a few years ago that I spent close to $3k on purchased coffees over the year (like oh my gosh... three thousand dollars.. that could have been a holiday!) And while I do absolutely love and enjoy delicious, well made coffees from my local barista, I also recognise I don't need to buy every coffee I drink! So this app is a way to keep track of the coffees I decide not to buy, and then maybe save for that holiday instead! </p>
      </div>
      <div>
        <p className="about__desc page__text">The app can be used for any item you regularly spend money on (doesn't have to be coffee!), just enter the price and quantity, and the total along with the date will be recorded in your browser's local storage. If you'd like to reset the current total, simply click Clear Balance and your saved history will be cleared and the app reset back to a zero balance.</p>
      </div>
    </div>

  )
}