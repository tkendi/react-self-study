import { motion } from "framer-motion";

import styles from '../../styles/Home.module.css'

const MenuItem = ({i}) => {
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  

  const style = {border: `1px solid ${colors[i]}`}
    return (
        <motion.li variants={variants} whileHover={{scale: (1.2)}} whileTap={{scale: (1.1)}}>
            <div className={styles.icon_placeholder}  style={style}/>
            <div className={styles.text_placeholder} style={style}/>
        </motion.li>
    )
}

export default MenuItem