import { useEffect, useState } from "react"
import CardProject from "../components/CardProject"
import { IoLogoGithub } from "react-icons/io"
import { TbWorldCode } from "react-icons/tb"
import image from "../assets/me2.jpg"
import web1 from "../assets/web1.png"
import web2 from "../assets/web2.png"
import { IoLogoReact } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiMysql, SiPrisma } from "react-icons/si"
import { GrFormNext, GrFormPrevious } from "react-icons/gr"

const MyProject = () => {
    const [tab, setTab] = useState("all")
    const label = ["all", "personal", "team", "work"]
    const [current, setCurrent] = useState(0)
    const [viewing, setViewing] = useState(3)

    const myProject = [
      {
        name:"Wedding Invitation", 
        type: "personal", 
        desc: "A website for wedding invitations design with modern look and engage animations", 
        linkGithub: "https://github.com/Putu-Bagus-Arjawa/WeddingInvitationsReactTailwind", 
        linkOnline: "https://weddinginvitations-ashen.vercel.app/", 
        iconGithub: <IoLogoGithub/>,
        iconBrowser : <TbWorldCode/>,
        imagenya: web1,
        techStacknya: [[<IoLogoReact/>, <RiTailwindCssFill/>, <SiMysql/>, <SiPrisma/>, <SiExpress/> ]]
      },
                  {
        name:"Donate-Nature", 
        type: "personal", 
        desc: "Donate Nature is a non-profit organization that moves in nature preservation, main focus on donation for planting plant or give education in school", 
        linkGithub: "https://github.com/Putu-Bagus-Arjawa/DonateNatureReactTailwindWebsite", 
        linkOnline: "https://donate-nature.vercel.app/", 
        iconGithub: <IoLogoGithub/>,
        iconBrowser : <TbWorldCode/>,
        imagenya: web2,
        techStacknya: [[<IoLogoReact/>, <RiTailwindCssFill/>, <SiMysql/>, <SiPrisma/>, <SiExpress/> ]]
      },
                  {
        name:"Book CRUD", 
        type: "personal", 
        desc: "CRUD simple book website", 
        linkGithub: "https://github.com/Putu-Bagus-Arjawa/WeddingInvitationsReactTailwind", 
        linkOnline: "https://weddinginvitations-ashen.vercel.app/", 
        iconGithub: <IoLogoGithub/>,
        iconBrowser : <TbWorldCode/>,
        imagenya: image,
        techStacknya: [[<IoLogoReact/>, <RiTailwindCssFill/>, <SiMysql/>, <SiPrisma/>, <SiExpress/> ]]
      },
            {
        name:"TalkerinYuk", 
        type: "personal", 
        desc: "Website untuk berkencan dan mengobrol, segmentasi pasarnya adalah anak muda berusia 18-25 tahun, layanan kami adalah memberikan jaminan kepuasan dalam berkencan atau mengobrol tanpa takut di-judge.", 
        linkGithub: "https://github.com/Putu-Bagus-Arjawa/WeddingInvitationsReactTailwind", 
        linkOnline: "https://weddinginvitations-ashen.vercel.app/", 
        iconGithub: <IoLogoGithub/>,
        iconBrowser : <TbWorldCode/>,
        imagenya: image,
        techStacknya: [[<IoLogoReact/>, <RiTailwindCssFill/>, <SiMysql/>, <SiPrisma/>, <SiExpress/> ]]
      },
    ]

    const handleViewing  = ()=>{
       if(window.innerWidth < 768){
        setViewing(1)
       }else if(window.innerWidth > 767 && window.innerWidth < 1024){
        setViewing(2)
       }else{
          setViewing(3)
       }
    }

    useEffect(()=>{
      addEventListener('resize', handleViewing)

      return ()=> removeEventListener('resize', handleViewing)
    }, [])


    const handleNext =()=> {
      setCurrent((id)=> (viewing + current == myProject.length ? 0 : id+1))
    }

    const handlePrev =()=>{
         setCurrent((id)=> (current  > 0? id -1 : myProject.length))
    }
  return (
    <section className="min-h-screen">
      <header className="flex md:flex-row flex-col justify-around items-center">
        <div className="flex gap-x-4 mb-4">
          {label.map((item, i)=>(
            <button key={i} className={`w-20 h-10 ${item === tab? "bg-triary text-black":"bg-primary text-white"}`} onClick={()=> setTab(item)}>{item}</button>
          ))}
        </div>
        <div className="mb-8">
          <h1 className="text-primary text-2xl md:text-3xl md:text-end text-center font-LuckiestGuy">My Project</h1>
          <p className="text-secondary md:text-end text-center">The Project I've made so far</p>
        </div>
      </header>
      <div className="flex justify-evenly gap-x-4 p-4 -z-10">
        <button onClick={handlePrev} className="text-2xl"><GrFormPrevious/></button>
        <article className="sm:ml-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
            
            {  tab == "all"? myProject.slice(current, current + viewing).map((item, i)=>(
              <CardProject name={item.name} desc={item.desc} linkGithub={item.linkGithub} linkProject={item.linkOnline} imagePreview={item.imagenya} iconBrowser ={item.iconBrowser} iconGithub={item.iconGithub} key={i} techStack={item.techStacknya}/>
            )):
                myProject.slice(current, current + viewing).filter(e=> e.type == tab).length > 0? 
                  myProject
                  .slice(current, viewing + current)
                  .filter(e=> e.type == tab)
                  .map((item, idx)=>(
                      <CardProject name={item.name} desc={item.desc} linkGithub={item.linkGithub} linkProject={item.linkOnline} imagePreview={item.imagenya} iconBrowser ={item.iconBrowser} iconGithub={item.iconGithub} key={idx} techStack={item.techStacknya}/>
                    )
            )
            :<p className="text-red-600">Data yang anda cari tidak ada</p>}
        </article>
        <button onClick={handleNext} className="text-2xl"><GrFormNext/></button>
      </div>
    </section>
  )
}

export default MyProject
