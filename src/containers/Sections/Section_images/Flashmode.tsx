import {ReactNode} from 'react' 
import FlashmodeCSS from './flashmode.module.css'

interface FlashmodeProps {
  icon: ReactNode
  title: string
  text: string
}

const Flashmode = ( { icon, title, text}: FlashmodeProps) => {
  return (
    <div className={FlashmodeCSS.container}>
      <div className={FlashmodeCSS.icon}>
        {icon}
      </div>
      <div className={FlashmodeCSS.title}>
        <p>{title}</p>
        <span></span>
      </div>
      <div className={FlashmodeCSS.text}>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Flashmode