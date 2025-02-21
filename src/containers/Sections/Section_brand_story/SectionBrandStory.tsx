import SectionCSS from './sectionBrandStory.module.css'
import { SectionHeading } from '../../../components'

const SectionBrandStory = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.container}>
        <div className={SectionCSS.title}>
          <SectionHeading 
            text = 'THE LIFE SIZE'
            boldText='BRAND STORY'
            description='View multiple content block layouts under fratures section.'/>
        </div>
        <div className={SectionCSS.text__container}>
          <div className={SectionCSS.text__container_left}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magnaal qua. Ut enim
              ad minim veniam, quis nostrud exercitation ulla mco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Sed ut per spiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque
              laudantium, totam rem aperiam, eaque ip
            </p>
          </div>
          <div className={SectionCSS.text__container_right}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          <div className={SectionCSS.text__container_1}>
            <ul className={SectionCSS.text__container_1_left}>
              <li>WEB & INTERACTIVE DESIGN</li>
              <li>CONTENT MANAGEMENT</li>
              <li>WEB APPLICATIONS</li>
              <li>SOFTWARE DEVELOPMENT</li>
              <li>ECOMMERCE SOLUTIONS</li>
            </ul>
            <ul className={SectionCSS.text__container_1_right}>
              <li>DATABASE DESIGN</li>
              <li>TECHNICAL DOCUMENTATION</li>
              <li>SOFTWARE ARCHITECTURE</li>
              <li>SEARCH OPTIMIZATION</li>
              <li>WEB PROMOTIONS</li>
            </ul>
          </div>
          </div>
        </div>
        <button>VIEW PROJECTS</button>
      </div>

    </section>
  )
}

export default SectionBrandStory