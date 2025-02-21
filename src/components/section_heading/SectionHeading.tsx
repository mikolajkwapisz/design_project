import React from 'react'
import HeadingCSS from './sectionHeading.module.css'
import { Divider } from '../../assets/img'

interface SectionHeadingProps{
  text: string
  boldText: string
  description: string
  center?: boolean
  image?: boolean
}


const SectionHeading: React.FC<SectionHeadingProps> = ({text, boldText, description, center, image}) => {
  return (
      <div className={center ? HeadingCSS.heading__center : HeadingCSS.heading__container}>
          <p className={HeadingCSS.heading__container_text1}>{text}</p>
          <p className={HeadingCSS.heading__container_text2}>{boldText}</p>
          <p className={HeadingCSS.heading__container_text3}>{description}</p>
          {!image && <img src={Divider} alt="divider" />}
        </div>
  )
}

export default SectionHeading