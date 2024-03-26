import { Container } from "../common/container"
import { motion } from "framer-motion"

export default function SecondPage(){
    return<Container>
        <motion.div
        initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}>

        </motion.div>
    </Container>
}