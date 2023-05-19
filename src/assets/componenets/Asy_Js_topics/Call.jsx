import { asy_js_text} from "../../constants/asy-js";
import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
function Call() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Call Backs</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{asy_js_text.CallBacks.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Call