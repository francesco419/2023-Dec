import { Container } from "../common/container";
import { motion } from "framer-motion";

export default function PlayGround(){
    return(
        <Container>
            <motion.div       initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}>

            </motion.div>
        </Container>
    )
}