import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
function Head() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Header</div>
            <div>
                <ul>
                    <li className="mb-1 text-left">{http_rq_text.Headers.description}</li>
                </ul>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Header Components:</div>
                <ul>
                    <li className="mb-1"><strong>Content Type</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Headers.Content_Type.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>Authorization</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Headers.Authorization.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>User Agent</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Headers.User_Agent.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}

export default Head