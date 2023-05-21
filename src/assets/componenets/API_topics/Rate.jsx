import { api_text } from "../../constants/api";
import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
function Rate() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Rate Limit</div>
            <div>
                <ul>
                    <li className="mb-1">{api_text.Rate_Limit.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Rate