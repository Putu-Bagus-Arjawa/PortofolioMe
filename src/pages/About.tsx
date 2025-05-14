import { FaRegPaperPlane } from "react-icons/fa"
import image from "../assets/me2.jpg"
const About = () => {
  return (
    <section className="sm:h-screen mb-14 h-auto flex flex-col items-center" id="about">
        <div className="flex flex-col mb-24">
            <h3 className="font-archivoBlack text-primary text-2xl md:text-4xl text-center">About Me</h3>
            <p className="text-secondary text-center">My Introduction</p>
        </div>
        <article className="flex md:flex-row flex-col justify-center items-center gap-x-8">
            <img src={image} alt="" className="w-4/5 sm:w-1/3 h-80 rounded-lg border-primary border-4" />       
            <div className="md:w-1/3 w-4/5">
                <p className="text-secondary mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quae debitis magni laboriosam, fuga, consectetur ipsa illum voluptatum, minus nihil dolor. Similique quos tempore corrupti perferendis labore laboriosam natus nihil!</p>
                <a download href="#" className="w-1/2 rounded-2xl bg-primary text-white hover:text-black hover:bg-triary px-4 py-2 flex justify-center gap-x-4 items-center">Download CV <FaRegPaperPlane/></a>
            </div>
        </article>

    </section>
  )
}

export default About
