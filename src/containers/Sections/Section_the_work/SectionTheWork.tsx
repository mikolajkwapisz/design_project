import SectionCSS from './sectionTheWork.module.css'
import { SectionHeading } from '../../../components'
import { IMG_03 } from '../../../assets/img'

const images = [IMG_03, IMG_03, IMG_03, IMG_03, IMG_03, IMG_03]

const SectionTheWork = () => {
  return (
    <section className={SectionCSS.section}>
      <div className={SectionCSS.container}>
      <SectionHeading
        text = ''
        boldText='THE WORK'
        description=''
        center ={true}
        image={true}
      />
        <ul>
          <li>ALL</li>
          <li>-</li>
          <li>UI/UX DESIGN</li>
          <li>-</li>
          <li>PROGRAMMING</li>
          <li>-</li>
          <li>PHOTOGRAPHY</li>
          <li>-</li>
          <li>ECOMMERCE</li>
        </ul>
        <div className={SectionCSS.images}>
          {images.map( (image, index) => (
            <img src={image} alt="image" key={`SectionTheWork_${image}_${index}`}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SectionTheWork