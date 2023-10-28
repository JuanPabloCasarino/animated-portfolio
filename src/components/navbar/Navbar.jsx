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
                    <a href=""><img src='/instagram.png' alt='Facebook'></img></a>
                    <a href=""><img src='/github.png' alt='Facebook'></img></a>
                    <a href=""><img src='/youtube.png' alt='Facebook'></img></a>
                </motion.div>
            </div>
        </div>

    )
}
export default Navbar