import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
function Structure() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Structure</div>
            <div>
                <ul>
                    <li className="mb-1 text-left">{http_rq_text.Structure.description}</li>
                </ul>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Structure Components:</div>
                <ul>
                    <li className="mb-1"><strong>Request Line</strong>
                        <ul className="ml-5 ">
                            <li className="mb-1 text-left">{http_rq_text.Structure.Rq_Line.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>Headers</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Structure.Headers.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>Body</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Structure.Body.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}

export default Structure