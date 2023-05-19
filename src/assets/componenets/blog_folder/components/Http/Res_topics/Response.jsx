import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "C:/IEEE_projects/blog2/src/constants/http-req"
import styles from "C:/IEEE_projects/blog2/src/constants/style.js"
import { http_rs_text } from "../../../constants/http-rsp"
function Response() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Response Body</div>
            <div>
                <ul className="list-disc">
                    <li className="mb-1">{http_rs_text.Response_body.description}</li>
                </ul>
            </div>
                    
        </motion.div>
    )
}

export default Response