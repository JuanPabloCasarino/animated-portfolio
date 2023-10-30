import './portfolio.scss'
import { useRef } from 'react'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items=[
  {
    id:1,
    title:"React Commerce",
    img:"https://images.pexels.com/photos/18857526/pexels-photo-18857526/free-photo-of-larch-heaven.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates perferendis quos fugit, quod sunt optio excepturi eum minus nisi beatae corporis. Quaerat, voluptate officiis tenetur culpa totam minus tempore!"
  },
  {
    id:2,
    title:"NodeJs Commerce",
    img:"https://images.pexels.com/photos/18822502/pexels-photo-18822502/free-photo-of-lausitzer-gebirge.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates perferendis quos fugit, quod sunt optio excepturi eum minus nisi beatae corporis. Quaerat, voluptate officiis tenetur culpa totam minus tempore!"
  },
  {
    id:3,
    title:"Vanilla Javascript Commerce",
    img:"https://images.pexels.com/photos/18798109/pexels-photo-18798109/free-photo-of-boats-moored-near-the-shore-with-the-view-of-mountains-in-the-horizon.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates perferendis quos fugit, quod sunt optio excepturi eum minus nisi beatae corporis. Quaerat, voluptate officiis tenetur culpa totam minus tempore!"
  },
  {
    id:4,
    title:"Audiovisual Portfolio Commerce",
    img:"https://images.pexels.com/photos/14655171/pexels-photo-14655171.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptates perferendis quos fugit, quod sunt optio excepturi eum minus nisi beatae corporis. Quaerat, voluptate officiis tenetur culpa totam minus tempore!"
  }
]

const Single =({item})=>{
  const ref = useRef()
  const {scrollYProgress}= useScroll({
    target:ref,
  })
  const y = useTransform(scrollYProgress, [0,1],[-300,300]);

  return(<section ref={ref}>
    <div className='container'>
      <div className='wrapper'>
        <img src={item.img} alt="" />
        <motion.div className='textContainer'style={{y}}>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <button>See Demo</button>
        </motion.div>
      </div>
    </div>
  </section>)
}

 const Portfolio = () => {
  const ref = useRef()

  const {scrollYProgress}= useScroll({
    target:ref,
    offset: ["end end", "start start"],
  })

  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
  })

  return (
    <div className='portfolio'>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={scaleX} className='progressBar'></motion.div>
      </div>
      {items.map((item)=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
    
  )
}
export default Portfolio
