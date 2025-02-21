import SectionCSS from './section_numbers.module.css'
import Number_component from './Number_component'
import { AiOutlineFundProjectionScreen, AiOutlineSmile} from 'react-icons/ai'
import { TbAward} from 'react-icons/tb'
import { BiDrink } from 'react-icons/bi'


interface itemProps{
  icon: React.ReactNode
  totalNumber: number
  title: string
}


const items: Array<itemProps> = [
  {
    icon: <AiOutlineFundProjectionScreen />,
    totalNumber: 505,
    title: 'TOTAL PROJECTS'
  },
  {
    icon: <AiOutlineSmile />,
    totalNumber: 220,
    title: 'SATISFIED CLIENTS'
  },
  {
    icon: <TbAward />,
    totalNumber: 720,
    title: 'AWARDS WON'
  },
  {
    icon: <BiDrink />,
    totalNumber: 707,
    title: 'MILESTONES MET'
  },
]

const Section_numbers = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.section__container}>
        <ul>
          {items.map((item, index) => (
            <li key={`Number_component_${item.title}_${index}`}>
              <Number_component 
                icon = {item.icon}
                totalNumber={item.totalNumber}
                title = {item.title}/>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Section_numbers