import {FC, useState, useRef, useEffect} from 'react'
import CarouselCSS from './carousel.module.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

interface CarouselProps {
  images: Array<string>
}

const Carousel: FC<CarouselProps> = ({ images}) => {
  const [leftPositionPx,  setLeftPositionPx] = useState(0)
  const firstRef = useRef< HTMLLIElement>(null)
  
  // 19.79 is an image width + gap in vw
  const maxMinusValue = -19.79 * (images.length - 3)

  function handleSlide(action: "prev" | "next") {
    if(firstRef.current){
        if( action === "prev") {
          setLeftPositionPx(prevValue => prevValue + 19.79)
        } else if( action === "next") {
          setLeftPositionPx(prevValue => prevValue - 19.79)
        }
      }
  }

  useEffect(() => {
    if(firstRef.current){
      const firstChild = firstRef.current
      if(leftPositionPx > maxMinusValue ){
        if(leftPositionPx < 0){
          firstChild.style.setProperty('--x', `${leftPositionPx}vw`)
        } else {
          firstChild.style.setProperty('--x', `0vw`)
          setLeftPositionPx(0)
        }
      } else {
        firstChild.style.setProperty('--x', `${maxMinusValue}vw`)
        setLeftPositionPx(maxMinusValue)
      }
    }
  }, [leftPositionPx])



  return (
    <div className={CarouselCSS.carousel}>
      <FiChevronLeft 
          onClick={() => handleSlide("prev")}
          role='button'
          aria-label='button'
      />
      <div className={CarouselCSS.carousel__images}>
        <ul > 
          {images.map( (image, index) => (
                <li key={`carousel_${image}_${index}`} ref={index == 0 ? firstRef: null}>
                  <img src={image} alt="image"/>
                </li>
              )
          )}
        </ul>
      </div>
        <FiChevronRight 
          onClick={() => handleSlide("next")}
          role='button'
          aria-label='arrow'
        />
    </div>
  )
}

export default Carousel