import { api_text } from "../../constants/api";
import React from "react"
import { motion } from "framer-motion"
import styles from "C:/IEEE_projects/blog2/src/constants/style.js"
function Req_Res() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Request Response</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{api_text.Req_Res.description}</li>
                </ul>
            </div>
                   
        </motion.div>
    )
}


export default Req_Res