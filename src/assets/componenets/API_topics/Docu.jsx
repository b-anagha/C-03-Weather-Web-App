import { api_text } from "../../constants/api";
import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
function Docu() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Documentation</div>
            <div>
                <ul>
                    <li className="mb-1 text-left">{api_text.Documentation.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Docu