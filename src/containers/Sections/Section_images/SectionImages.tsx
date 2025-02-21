import {ReactNode} from 'react'
import SectionCSS from './sectionImages.module.css'
import Flashmode from './Flashmode'
import { BsCamera} from 'react-icons/bs'

interface FlashmodeProps {
  icon: ReactNode
  title: string
  text: string
}

const items: Array<FlashmodeProps> = [
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
  {
    icon: <BsCamera/>,
    title: "FLASHMODE",
    text: "PHOTOGRAPH'S BEST PLACE"
  },
]

const SectionImages = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.container}>
        <ul>
          {items.map( (item, index) => (
            <li key={`SectionImages_id_${index}`}>
              <Flashmode 
                icon = {item.icon}
                title = {item.title}
                text = {item.text}
              />
            </li>
          ))}
        </ul>
      </div>
      
    </section>
  )
}

export default SectionImages