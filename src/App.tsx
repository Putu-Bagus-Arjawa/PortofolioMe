
import './App.css'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import MyProject from './pages/MyProject'
import MySkill from './pages/MySkill'

function App() {
  return (
    <div className='bg-[#f1f1f1]'>
      <Navbar/>
      <Home/>
      <About/>
      <MyProject/>
      <MySkill/>
      <Gallery/>
    </div>
  )
}

export default App
