import type { ReactElement } from "react"

    interface CardProperty{
        linkGithub:string
        linkProject: string
        iconGithub: ReactElement
        iconBrowser: ReactElement
        techStack: ReactElement [][]
        imagePreview: string
        name: string
    }
    
const CardProject = ({name,linkGithub, linkProject, iconGithub, iconBrowser, imagePreview, techStack}:CardProperty) => {
  return (
    <div className="bg-primary w-full md:w-4/5 p-4 shadow-2xl rounded-2xl flex flex-col items-center justify-between">
        <div className="w-4/5 h-50 overflow-hidden brightness-105 rounded-2xl">
                    <img src={imagePreview} className="object-cover w-full h-full rounded-2xl hover:scale-110 active:scale-110"/>
        </div>
        <h3 className="text-white text-2xl mb-2 font-Delius">{name}</h3>
            {[...techStack].map((item, i)=>(
                <div key={i} className="flex justify-between w-full gap-2 mb-4">
                    {item.map((it, idx)=>(
                        <div key={idx} className="border-2 border-white p-2">
                            {it}
                        </div>
                    ))}
                </div>
            ))}        
        <div className="flex justify-evenly items-end w-full">
            <button className="text-5xl active:text-triary hover:text-triary"><a href={linkGithub} className="text-center">{iconGithub} </a></button>
            <button className="text-5xl active:text-triary hover:text-triary"><a href={linkProject}>{iconBrowser}</a></button>
        </div>
    </div>
  )
}

export default CardProject
