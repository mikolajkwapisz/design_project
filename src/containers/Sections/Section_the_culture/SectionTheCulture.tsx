import SectionCSS from './sectionTheCulture.module.css'
import { SectionHeading } from '../../../components'

const SectionTheCulture = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.container}>
        <div className={SectionCSS.title}>
          <SectionHeading 
            text='WORK PLACE'
            boldText='THE CULTURE'
            description='Lovely people with nack for design creativity flourish here'
            center = { true}/>
        </div>
        <div className={SectionCSS.text}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SectionTheCulture