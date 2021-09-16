import './DarkMode.css'

const DarkMode = () => {
  let clickedClass = 'clicked'
  const body = document.body
  const lightTheme = 'light'
  const darkTheme = 'dark'
  let theme

  if (localStorage) {
    theme = localStorage.getItem('theme')
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  const toggleTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem('theme', 'light')
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem('theme', 'dark')
      theme = darkTheme
    }
  }

  return (
    <div className="darkmode">
      <div
        className={theme === 'dark' ? clickedClass : ''}
        id="darkMode"
        onClick={(e) => toggleTheme(e)}
      >
        <div className="toggle__notch"></div>
      </div>
    </div>
  )
}


export default DarkMode