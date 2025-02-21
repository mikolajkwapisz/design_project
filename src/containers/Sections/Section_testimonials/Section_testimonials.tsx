import SectionCSS from './Section_testimonials.module.css'
import { SectionHeading } from '../../../components'
import Carousel from './Carousel'
import { IMG_07 } from '../../../assets/img'

interface ItemProps{
  imgSrc: string
  name: string
  position: string
  description?: string
}

const items: Array<ItemProps> = [
  {
    imgSrc: IMG_07,
    name: 'Ben Affleck',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'Clifford DeVoe',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'Jason Doe',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'John Doe',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'Json Doe',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'Joseph Doe',
    position: 'CEO - ENVATO INC.'
  },
  {
    imgSrc: IMG_07,
    name: 'Peter Parker',
    position: 'CEO - ENVATO INC.'
  },
]

const Section_testimonials = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.section__container}>
        <div className={SectionCSS.section__container_text}>
          <SectionHeading 
              text='HEAR FROM'
              boldText='TESTIMONIALS'
              description='We always listen to out clients'
              center = { true}
          />
        </div>
        <div className={SectionCSS.section__container_carousel}>
          <Carousel 
            items={items}/>
        </div>
      </div>
    </section>
  )
}

export default Section_testimonials