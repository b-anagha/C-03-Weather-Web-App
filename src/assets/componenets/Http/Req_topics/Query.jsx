import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
function Query() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Query Parameters</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{http_rq_text.Query_Param.description[0]}</li>
                    <li className="mb-1">{http_rq_text.Query_Param.description[1]}</li>
                    <li className="mb-1">{http_rq_text.Query_Param.description[2]}</li>
                </ul>
            </div>
                
        </motion.div>
    )
}

export default Query