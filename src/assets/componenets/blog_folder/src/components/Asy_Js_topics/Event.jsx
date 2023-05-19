import { asy_js_text} from "../../constants/asy-js";
import React from "react"
import { motion } from "framer-motion"
import styles from "C:/IEEE_projects/blog2/src/constants/style.js"
function Event() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Event Loop</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{asy_js_text.Async_fn.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Event