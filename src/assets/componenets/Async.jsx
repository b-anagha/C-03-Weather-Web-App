import styles from "../constants/style";

import { useState, useEffect } from "react";
import Asy from "./Asy_Js_topics/Async";
import Call from "./Asy_Js_topics/Call";
import Event from "./Asy_Js_topics/Event";
import Handle from "./Asy_Js_topics/Handle";
import Promise from "./Asy_Js_topics/Promise";
import { asy_js_text } from "../constants/asy-js";
function Async() {
  const [topic, setTopic] = useState(0);
  return (
    <div className="py-6  flex justify-center text-offWhite  text-xl">
      <div className="flex  flex-wrap w-[60%]">
        <div className={`text-center basis-full ${styles.title}`}>
          Asynchronous JavaScript
        </div>

        <div className="basis-full flex justify-center">
          <div
            className={`flex justify-center bg-[#e9d8fd] ${styles.btn_grp}`}
            id="button-grp"
          >
            <button
              onClick={() => setTopic(1)}
              className={`${
                topic == 1 ? "bg-black text-[#e9d8fd]" : "bg-transparent"
              } ${styles.button_start}`}
            >
              Asynchronous
            </button>
            <button
              onClick={() => setTopic(2)}
              className={`${
                topic == 2 ? "bg-black text-[#e9d8fd]" : "bg-transparent"
              } ${styles.button}`}
            >
              Call
            </button>
            <button
              onClick={() => setTopic(3)}
              className={`${
                topic == 3 ? "bg-black text-[#e9d8fd]" : "bg-transparent"
              } ${styles.button}`}
            >
              Event
            </button>
            <button
              onClick={() => setTopic(4)}
              className={`${
                topic == 4 ? "bg-black text-[#e9d8fd]" : "bg-transparent"
              } ${styles.button}`}
            >
              Handling
            </button>
            <button
              onClick={() => setTopic(5)}
              className={`${
                topic == 5 ? "bg-black text-[#e9d8fd]" : "bg-transparent"
              } ${styles.button_end}`}
            >
              Promise
            </button>
          </div>
        </div>
        <div className="w-full h-[5px] rounded-3xl bg-pink-300 my-3"></div>
        <div className="my-10 w-full">
          <div>
            <ul className="ml-5">
              <li className="mb-1">{asy_js_text.para1}</li>
              <li className="mb-1">{asy_js_text.para3}</li>
            </ul>
          </div>

          {topic == 1 && <Asy />}
          {topic == 2 && <Call />}
          {topic == 3 && <Event />}
          {topic == 4 && <Handle />}
          {topic == 5 && <Promise />}
        </div>
      </div>
    </div>
  );
}

export default Async;
