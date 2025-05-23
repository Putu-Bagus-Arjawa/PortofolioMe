
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

  const positions = [
    "center",
    "left1",
    "left",
    "right",
    "right1"
  ]

  const [positIdx, setPositIdx] = useState([0,1,2,3,4])

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
          className="w-50 h-50 absolute"
          initial= "left1"
          animate= {positions[positIdx[i]]}
          variants={imageVariants}
          transition={{ duration: 1, ease: "easeInOut" }}


        />
      ))}
      <button className="text-white mt-[400px]" onClick={handleNext}>Next</button>
    </div>
  )
}

export default Gallery






