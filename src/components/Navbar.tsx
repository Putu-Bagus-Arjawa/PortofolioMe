import { useEffect, useState } from "react"
import { IoAppsOutline } from "react-icons/io5"
import imagenya from "../assets/me2.jpg"

const Navbar = () => {
    
    const items = [
        {name: "Home"},
        {name: "About"},
        {name: "Skills"},
        {name: "Projects"},
        {name: "Gallery"},
        {name: "Quotes"},
        {name: "Contact"},
    ]

    const myData = [
      {name: "Putu Bagus Arjawa", image:imagenya},
    ]
    const [widthNow, setWidthNow] = useState("desktop")
    const [clicked, setClicked] = useState(false)

    const changeSize =()=>{
      if (window.innerWidth <= 640){
        setWidthNow("mobile")
      }else{
        setWidthNow("desktop")
      }
    }

    useEffect(()=>{
      window.addEventListener("resize", changeSize)

      return ()=> {
        window.removeEventListener("resize", changeSize)
      }
    }, [])

    const handleClick =()=>{
      setClicked(!clicked)
    }
  return (
    <div>
      {widthNow == "desktop" && (
          <header className="fixed flex justify-around items-center h-14 w-full shadow-lg p-8 bg-white z-30">
            <h1 className="text-2xl text-primary font-LuckiestGuy">Arjawa Dev</h1>
            <nav className=" flex gap-x-4 items-center">
              {items.map((item, idx)=>
              (
                <div key={idx}>
                  <a href="" className="text-primary">{item.name}</a>
                </div>
                
              ))}
                <div className="rounded-full bg-primary text-white w-10 h-10 ml-20 text-center flex justify-center items-center">{myData[0].name.toUpperCase().charAt(myData[0].name.length -1)}</div>
            </nav>
          </header>
      )}

      { widthNow == "mobile" && (
        <header className="fixed bottom-0 inset-x-0 flex justify-around items-center h-auto p-4 w-full  bg-triary z-30">
          <h1 className="text-2xl text-primary font-archivoBlack">Arjawa Dev</h1>
          <nav  className={`p-8 bg-triary w-full fixed bottom-16 ${clicked? "grid grid-cols-3 place-items-center ": "hidden"} gap-x-4 items-center`}>
            {items.map((item, idx)=>
            (
              <div key={idx}>
                <a href="" className="text-primary hover:text-white hover:border-b-2 hover:border-white active:border-2 active:border-white">{item.name}</a>
              </div>
            ))}
          </nav>
          <button className="text-2xl md:hidden" onClick={handleClick}><IoAppsOutline/></button>
        </header>
        
      )}
    </div>
  )
}

export default Navbar
