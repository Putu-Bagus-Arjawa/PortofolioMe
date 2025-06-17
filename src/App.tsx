
import './App.css'
import Gallery from './pages/Gallery'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import MyProject from './pages/MyProject'
import MySkill from './pages/MySkill'
import StickyImage from './components/StickyImage'
function App() {
  return (
    <div className='bg-black'>
      <Navbar/>
      <Home/>
      <About/>
      <MyProject/>
      <MySkill/>
      <Gallery/>
      <StickyImage/>
    </div>
  )
}

export default App
