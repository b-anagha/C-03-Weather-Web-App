import React from "react"
import { motion } from "framer-motion"
import {http_rq_text} from "../../../constants/http-req"
import styles from "../../../constants/style"
import { http_rs_text } from "../../../constants/http-rsp"
function Status() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className={`text-center basis-full mb-5 ${styles.title}`}>Status Codes</div>
            <div>
                <ul>
                    <li className="mb-1">{http_rs_text.Headers.description}</li>
                </ul>
            </div>
            <div className="my-5">
                <ul>
                    <li className="mb-1"><strong>1xx</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rs_text.Status_Codes.Code1xx.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>2xx</strong>
                        <ul className="ml-5 ">
                            <li className="mb-1">{http_rs_text.Status_Codes.Code2xx.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>3xx</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rs_text.Status_Codes.Code3xx.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>4xx</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rs_text.Status_Codes.Code4xx.description}</li>
                        </ul>
                    </li>
                    <li className="mb-1"><strong>5xx</strong>
                        <ul className="ml-5">
                            <li className="mb-1">{http_rs_text.Status_Codes.Code5xx.description}</li>
                        </ul>
                    </li>
                </ul>
            </div>           
        </motion.div>
    )
}

export default Status