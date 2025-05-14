
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import MyProject from './pages/MyProject'
import MySkill from './pages/MySkill'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <MyProject/>
      <MySkill/>
    </>
  )
}

export default App
