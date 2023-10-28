import './hero.scss'
import { animate, motion } from 'framer-motion'
const textVariants = {
  initial: {
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    },
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      delay:1,
      duration:2,
      repeat:Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x:0,
  },
  animate:{
    x:'-300%',
    transition:{
      repeat:Infinity,
      repeatType:'mirror',
      duration:30,
    },
  },
}

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div className='text_pres' variants={textVariants} initial='initial' animate='animate'>
          <motion.h2 variants={textVariants}>JUAN PABLO CASARINO</motion.h2>
          <motion.h3 variants={textVariants}>Full Stack <br/>Web Developer</motion.h3>
          <motion.button className='button' variants={textVariants}>Contact me</motion.button>
          <motion.img src='/scroll.png' variants={textVariants} animate="scrollButton"></motion.img>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial='initial' animate='animate'>Javascript NodeJS ReactJS HTML CSS MongoDB</motion.div>
      
    </div>
  )
}

export default Hero
