import { motion } from "framer-motion"

export default function OuterPage(){
    return(
        <motion.div
        initial={{x:-window.innerHeight}}
        animate={{x:0}}
        exit={{x:window.innerHeight}}
        transition={{duration:.5}}
        >
            <h1>outer page</h1>
        </motion.div>
    )
}