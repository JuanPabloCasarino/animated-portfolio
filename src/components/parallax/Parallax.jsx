import './parallax.scss'
import {useRef} from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type}) => {

const ref = useRef()

const {scrollYProgress} = useScroll({
    target:ref,
    offset:['start start','end start']
})

const yBg=useTransform(scrollYProgress, [0,1],['0%', '70%'])
const yText=useTransform(scrollYProgress, [0,1],['0%', '100%'])

return (
<div className='parallax' style={{
        background:type==='skills'
        ? 'linear-gradient(180deg, #013440,#026873 )'
        :'linear-gradient(180deg, #013440,#038C7F )',}}>
    <motion.h1 style={{y:yText}}>{type==='skills'? 'Skills':"Projects"}</motion.h1>
    <motion.div className="mountains"></motion.div>
    <motion.div className="planets" style={{y:yBg,
        backgroundImage:'url(${type==="skills"? "/planets.png":"/sun.png"})'
    }}></motion.div>
    <motion.div className="stars" style={{x:yBg}}></motion.div>
</div>
)
}

export default Parallax