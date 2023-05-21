import { asy_js_text} from "../../constants/asy-js";
import React from "react"
import { motion } from "framer-motion"
import styles from "../../constants/style"
function Promise() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Promises</div>
            <div>
                <ul>
                    <li className="mb-1">{asy_js_text.Promises.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Promise