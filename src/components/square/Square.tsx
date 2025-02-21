import React from 'react'
import './square.css';

interface SquareProps{
  icon: React.ReactNode
  title: string
  description: string | undefined | null 
}

const Square = ({
icon, title, description
}: SquareProps) => {
  return (
    <div className='square'>
      <div className='square__icon'>
        {icon}
      </div>
      <div className='square__title'>
        <h1>
          {title}
        </h1>
      </div>
      <div className='square__description'>
        {/* If there is no description then use default text*/ }
        <p>
          {description ? description : 'Auersla, conse ctetur adipis icing lorem ipsum dolor sit amet'}
        </p>
      </div>
      <div className='square__link'>
        <a href="">
          LEARN MORE
        </a>
      </div>
    </div>
  )
}

export default Square