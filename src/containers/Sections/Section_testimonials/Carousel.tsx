import {useState, useEffect} from 'react'
import CarouselCSS from './carousel.module.css'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { motion} from 'framer-motion'
import useWindowSize from '../../../hooks/useWindowSize'

interface ItemProps{
  imgSrc: string
  name: string
  position: string
  description?: string

}

interface CarouselProps{
  items: Array<ItemProps>
}

const Carousel = ({ items }: CarouselProps) => {
  const [ indexPositions, setIndexPositions] = useState({start: 1, center: 2, end: 3})
  const [ currItems, setCurrItems ] = useState( [items[indexPositions.start], items[indexPositions.center], items[indexPositions.end]])

  const windowSizeWidth = useWindowSize().width
  let animationDistance = windowSizeWidth > 1100 ? "12vw" : "24vw"

  // true = slide right, false = slide left
  const [ slideSide, setSlideSide] = useState(true)

  function handleSlide( action: "prev" | "next") {

    // slide to left
    if( action == "prev"){

      // deacrising index of visible images
      setIndexPositions( ( prevValues ) => {
        return {
          start: handleIndexChange(prevValues.start - 1),
          center: handleIndexChange(prevValues.center - 1),
          end: handleIndexChange(prevValues.end - 1)
        }
      }
      )
      setSlideSide( false)
    // slide to right
    } else if( action == "next") {

      // increasing index of visible images
      setIndexPositions( ( prevValues ) => {
        return {
          start: handleIndexChange(prevValues.start + 1),
          center: handleIndexChange(prevValues.center + 1),
          end: handleIndexChange(prevValues.end + 1)
        }
      }
      )
      setSlideSide( true)
    }
  }

  function handleIndexChange( i: number): number {
    if(i < 0){
      i = items.length - 1;
      return i
    } else if( i >= items.length) {
      return i = 0
    } else {
      return i
    }
  }

  useEffect(() => {
    setCurrItems( [items[indexPositions.start], items[indexPositions.center], items[indexPositions.end]] )
  }, [indexPositions])
  
  return (
    <div className={CarouselCSS.container}>
      <FiChevronLeft 
        onClick={() => handleSlide("prev")}
        role='button'
        aria-label='button'
      />
      <div className={CarouselCSS.carousel}>
        <div className={CarouselCSS.images}>

          <motion.div 
            key={`Start_${indexPositions.start}`}
            animate = {{ x: 0, scale: 1, filter: "grayscale(100%)" }}
            transition={{ type: "tween", duration: 0.8}}
            initial = {{ x: slideSide ? `-${animationDistance}` : animationDistance, scale: slideSide ? 1 : 1.5 , filter: slideSide ? "grayscale(100%)" : "grayscale(0)"}} 
            className={ CarouselCSS.carousel__item}
          >
            <img src={currItems[0].imgSrc} alt="profile image" />
          </motion.div>
          <motion.div 
            key={`Center_${indexPositions.center}`}
            animate = {{ x: 0, scale: 1, filter: "grayscale(0)"}}
            transition={{ type: "tween", duration: 0.9}}
            initial = {{ x: slideSide ? `-${animationDistance}` : animationDistance, scale: 0.7, filter: "grayscale(100%)"}} 
            className={CarouselCSS.carousel__main_img}
          >
            <img src={currItems[1].imgSrc} alt="profile image" />
          </motion.div>
          <motion.div 
            key={`End_${indexPositions.end}`}
            animate = {{ x: 0, scale: 1, filter: "grayscale(100%)" }}
            transition={{ type: "tween", duration: 0.8}}
            initial = {{ x: slideSide ? `-${animationDistance}` : animationDistance, scale: 1.5, filter: slideSide ? "grayscale(0)" : "grayscale(100%)"}} 
            className={CarouselCSS.carousel__item}
          >
            <img src={currItems[2].imgSrc} alt="profile image" />
          </motion.div>

        </div>
      <motion.div 
          key={`Center_text${indexPositions.center}`}
          animate = {{ x: 0}}
          transition={{ type: "tween", duration: 1}}
          initial = {{ x: slideSide ? -1000 : 1000}} 
          className={CarouselCSS.carousel__main_contianer}
          >
          <div className={CarouselCSS.carousel__main_name}>
            <p>{currItems[1].name}</p>
          </div>
          <div className={CarouselCSS.carousel__main_position}>
            <p>{currItems[1].position}</p>
          </div>
          <div className={CarouselCSS.carousel__main_description}>
            <p>{currItems[1].description ? currItems[1].description : ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, maiores atque quam placeat nobis quidem quibusdam'}</p>
          </div>
          </motion.div>
        </div>

      <FiChevronRight 
        onClick={() => handleSlide("next")}
        role='button'
        aria-label='button'
      />
    </div>
  )
}

export default Carousel