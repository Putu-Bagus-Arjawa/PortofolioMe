import { FaInstagram, FaRegPaperPlane } from "react-icons/fa"
import aku from "../assets/aku.png"
import { CiLinkedin } from "react-icons/ci"
import { IoLogoGithub } from "react-icons/io"
import { motion, useInView } from "motion/react"
import { useRef } from "react"




const Home = () => {
    const ref = useRef(null)
    const useView = useInView(ref, {once:false})

  return (
    <section className="sm:h-screen h-auto mb-8 w-full flex justify-center items-center" ref={ref}>
        <article 
            className="flex  justify-center items-center gap-x-8"

        >
            <motion.article className="w-1/2 flex flex-col gap-y-8"
                 initial={{ x:-200, opacity: 0.3 }}
            animate= {useView?{ x:0, opacity: 1,  transition:{duration:1.5, type:"spring", bounce:0.7} }:{}}
            >
                <h1 className="text-xl md:text-4xl text-primary font-LuckiestGuy">I'm Arjawa✋</h1>
                <div className="text-primary flex justify-center items-center gap-x-4 text-xl md:text-3xl">
                    <div className="h-[0.5px] w-12 bg-primary"></div>
                        Website Frontend Enthusiast
                </div>
                <p className="text-secondary text-lg md:text-xl">I'm Undergraduated Informatics at Udayana University and I'm looking for opportunities in Frontend Web Developer</p>
                <div className="flex gap-x-8">
                    <button className="text-4xl"><CiLinkedin/></button>
                    <button className="text-4xl"><FaInstagram/></button>
                    <button className="text-4xl"><IoLogoGithub/></button>
                </div>
                <button><a href="#about" className="shadow-xl w-5/6 md:w-1/2 flex justify-center items-center gap-x-4 bg-primary rounded-3xl px-4 py-2 text-white hover:bg-triary hover:text-black">Say Hello <FaRegPaperPlane/></a></button>
            </motion.article>
            <motion.img src={aku} alt=""  
                className="w-1/5 h-1/5 shadow-2xl shadow-purple-600 rounded-full"
                initial={{ x:200, opacity: 0.3 }}
                animate= {useView?{ x:0, opacity: 1,  transition:{duration:1.5, type:"spring", bounce:0.7} }:{}}
            />
        </article>
    </section>
  )
}

export default Home
