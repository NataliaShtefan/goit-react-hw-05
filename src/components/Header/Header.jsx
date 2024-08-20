
import Navigation from "../Navigation/Navigation"
import s from "./Header.module.css"




const Header = () => {
  return (
    <header className={s.header}>
      <h1>Movies Library</h1>
      <nav>
       <Navigation/>
      </nav>
    </header>
  )
}

export default Header
