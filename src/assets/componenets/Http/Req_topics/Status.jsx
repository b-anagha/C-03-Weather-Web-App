import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
function Status() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Status</div>
            <div>
                <ul className="text-left">
                    <li className="mb-1">{http_rq_text.Status_Codes.description[0]}</li>
                    <li className="mb-1">{http_rq_text.Status_Codes.description[1]}</li>
                </ul>
            </div>
            <div className="my-5">
                <div className={styles.subheading}>Status Codes:</div>
                <ul>
                    <li className="mb-1"><strong>200</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code200.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code200.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>201</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code201.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code201.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>204</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code204.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code204.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>400</strong>
                        <ul className="ml-5 ">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code400.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code400.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>401</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code401.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code401.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>403</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code403.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code403.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>404</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code404.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code404.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>500</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code500.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code500.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>503</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rq_text.Status_Codes.Code503.stat}</li>
                            <li className="mb-1">{http_rq_text.Status_Codes.Code503.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}

export default Status