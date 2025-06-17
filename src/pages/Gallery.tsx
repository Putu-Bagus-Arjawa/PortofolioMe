
import { motion } from "motion/react"
import me from "../assets/Me.png"
import me2 from "../assets/me2.jpg"
import spr from "../assets/supre.jpg"
import web1 from "../assets/web1.png"
import web2 from "../assets/web2.png"
import { useState } from "react"



const Gallery = () => {
  const data= [
    me, me2, spr, web1, web2
  ]

  const positions = ["left","left1", "center","right","right1"]

  const [positIdx, setPositIdx] = useState([3,2,1,4,0])

  const imageVariants = {
    center: {x: "0%", scale: 1, zIndex: 5},
    left1: {x: "-50%", scale: 0.7, zIndex: 2},
    left: {x: "-90%", scale: 0.5, zIndex: 1},
    right: {x: "90%", scale: 0.5, zIndex: 1},
    right1: {x: "50%", scale: 0.7, zIndex: 2},
  }

  const handleNext  = ()=>{
    setPositIdx((prevIdx:number[])=>{
      const updateIndex = prevIdx.map((prevIdx)=> (prevIdx + 1)% 5)
      return updateIndex
    })
  }

  return (
    <div className="flex items-center flex-col justify-center bg-black h-screen">
      {data.map((image, i)=>(
        <motion.img 
          key={i}
          src={image}
          alt={image}
          className="rounded-3xl shadow-purple-600 shadow-2xl w-50 h-50 absolute"
          initial= {positions[positIdx[i]]}
          animate= {positions[positIdx[i]]}
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}


        />
      ))}
      <button className="text-white mt-[400px] rounded-2xl bg-purple-800 px-4 py-2 hover:bg-purple-400  hover:text-black" onClick={handleNext}>Next</button>
    </div>
  )
}

export default Gallery






