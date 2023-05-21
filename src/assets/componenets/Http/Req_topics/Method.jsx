import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
function Methods() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Methods</div>
           
            <div className="my-5">
                <div className={styles.subheading}>Types of Methods:</div>
                <ul>
                    <li className="mb-1 text-left"><strong>GET</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Methods.Get.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1 text-left"><strong>POST</strong>
                        <ul className="ml-5 ">
                            <li className="mb-1 text-left">{http_rq_text.Methods.Post.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1 text-left"><strong>PUT</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Methods.Put.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1 text-left"><strong>DELETE</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Methods.Delete.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1 text-left"><strong>PATCH</strong>
                        <ul className="ml-5">
                            <li className="mb-1 text-left">{http_rq_text.Methods.Patch.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}

export default Methods