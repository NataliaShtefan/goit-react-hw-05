import { Route, Routes } from "react-router-dom"
import Header from "./components/Header/Header"


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
<Route path="/" element={<h2>Home</h2>}/>
<Route path="/movies" element={<h2>Movies</h2>}/>
      </Routes>
    </div>
  )
}

export default App
