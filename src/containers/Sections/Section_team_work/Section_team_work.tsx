import SectionCSS from './section_team_work.module.css'
import { SectionHeading } from '../../../components'
import Carousel from './Carousel'
import { IMG_05 } from '../../../assets/img'

const images = [ IMG_05, IMG_05, IMG_05, IMG_05, IMG_05, IMG_05, IMG_05];

const Section_team_work = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.section__container}>
        <div className={SectionCSS.section__container_heading}>
          <SectionHeading 
            text='WHO WE ARE'
            boldText='TEAM WORK'
            description='We really love what we do & our work on every project truly reflects that.'
          />
        </div>
        <div className={SectionCSS.section__container_carousel}>
        <Carousel 
          images={images}
        />
        </div>
        <div className={SectionCSS.section__container_description}>
          Martin loves gossiping code on his iPhone. Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </div>
      </div>
    </section>
  )
}

export default Section_team_work