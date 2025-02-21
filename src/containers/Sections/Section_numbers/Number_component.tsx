import React from "react"
import ComponentCSS from './number_component.module.css'

interface Number_componentProps{
  icon: React.ReactNode
  totalNumber: number
  title: string
}


const Number_component: React.FC<Number_componentProps> = ({icon, totalNumber, title}) => {
  return (
    <div className={ComponentCSS.container}>
      <div className={ComponentCSS.icon}>
        {icon}
      </div>
      <div className={ComponentCSS.number}>
        <p>{totalNumber}</p>
      </div>
      <div className={ComponentCSS.title}>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default Number_component