import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'
const Navbar = () => {
    return(
        <div className='navbar'>
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}}>Juan Pablo</motion.span>
                <motion.div initial={{opacity:0, scale:0.5}}
                animate={{opacity:1,scale:1}}
                transition={{duration:0.5}} className="social">
                    <a href=""><motion.img src='/instagram.png' alt='Instagram' whileHover={{scale:1.5}} whileTap={{scale:0.95}}></motion.img></a>
                    <a href=""><motion.img src='/github.png' alt='Github' whileHover={{scale:1.5}} whileTap={{scale:0.95}}></motion.img></a>
                    <a href=""><motion.img src='/linkedin.png' alt='Linkedin' whileHover={{scale:1.5}} whileTap={{scale:0.95}}></motion.img></a>
                </motion.div>
            </div>
        </div>

    )
}
export default Navbar