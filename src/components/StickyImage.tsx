import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"


const StickyImage = () => {
  return (

    <div className="p-8 relative h-[150vh]">
        <Imagenya/>
    </div>
  )
}

export default StickyImage


const Imagenya= ()=>{
    const targetRefnya = useRef(null)
    const {scrollYProgress} = useScroll(
        {
            target:targetRefnya,
            offset: ["end end", "end start"]
        }
    )

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0])
    return (
        <motion.div
            ref={targetRefnya}
            style={{ scale, }}
            className="sticky overflow-hidden min-h-screen comp rounded-3xl"
        >
            <motion.div className="bg-neutral-950/40 absolute inset-0 "/>
            <OverlayCopy heading ="Contact Me" subHeading= "I'm Open to Work"/>
        </motion.div>
    )
}

interface overlayCopy{
    heading : string
    subHeading:string

}
const OverlayCopy= ({heading, subHeading}:overlayCopy)=>{
    return (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-white text-3xl font-LuckiestGuy">{heading}</h1>
            <p className="text-white text-2xl font-Delius">{subHeading}</p>
        </div>
    )
}
