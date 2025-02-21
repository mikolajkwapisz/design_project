import { Square } from '../../../components';
import { BiPen, BiFontFamily } from 'react-icons/bi';
import {TfiVector, TfiViewGrid} from 'react-icons/tfi'
import { IoLayersOutline} from 'react-icons/io5'
import {SectionHeading} from '../../../components';
import SectionCSS from './section_1.module.css';

interface SquareObject {
  title: string
  icon: any
  description: string | null | undefined
}

const squares: Array<SquareObject> = [
  {
    title: 'PIXEL PERFECT',
    icon: BiPen,
    description: ''
  },
  {
    title: 'VECTOR SHAPES',
    icon: TfiVector,
    description: ''
  },
  {
    title: 'GOOGLE FONTS',
    icon: BiFontFamily,
    description: ''
  },
  {
    title: 'EASY LAYERS',
    icon: IoLayersOutline,
    description: ''
  },
  {
    title: 'BOOTSTRAP GRID',
    icon: TfiViewGrid,
    description: ''
  },
]



const Section_1 = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.section__container}>
        <div className={SectionCSS.section__container_main}>
          <SectionHeading
            text='WHAT WE DO'
            boldText='EXPERTS'
            description='We build digital solutions'/>
        </div>
        { squares.map( (square, index) => (
          <div className={SectionCSS.section__container_square} key={`${square.title}-id:${index}`}>
            <Square 
              title= {square.title}
              icon = { <square.icon />}
              description=''/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section_1