import styles from "../constants/style";

import { useState, useEffect } from "react";
import Auth from "./API_topics/Auth";
import Docu from "./API_topics/Docu";
import Endpt from "./API_topics/Endpt";
import Purpose from "./API_topics/Purpose";
import Rate from "./API_topics/Rate";
import Req_Res from "./API_topics/Req_Resp";
import Type from "./API_topics/Type";
import { api_text } from "../constants/api";
function Api() {
  const [topic, setTopic] = useState(0);
  return (
    <div className="py-6  flex justify-center text-offWhite  text-xl">
      <div className="flex  flex-wrap w-[60%]">
        <div className={`text-center basis-full ${styles.title}`}>API</div>

        <div className="basis-full flex justify-center">
          <div
            className={`flex justify-center bg-[#e9d8fd] ${styles.btn_grp}`}
            id="button-grp"
          >
            <button
              onClick={() => setTopic(1)}
              className={`${
                topic == 1 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button_start}`}
            >
              Authentication
            </button>
            <button
              onClick={() => setTopic(2)}
              className={`${
                topic == 2 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button}`}
            >
              Documentation
            </button>
            <button
              onClick={() => setTopic(3)}
              className={`${
                topic == 3 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button}`}
            >
              Endpoint
            </button>
            <button
              onClick={() => setTopic(4)}
              className={`${
                topic == 4 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button}`}
            >
              Purpose
            </button>
            <button
              onClick={() => setTopic(5)}
              className={`${
                topic == 5 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button}`}
            >
              Rate
            </button>
            <button
              onClick={() => setTopic(6)}
              className={`${
                topic == 6 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button}`}
            >
              Request Response
            </button>
            <button
              onClick={() => setTopic(7)}
              className={`${
                topic == 7 ? "bg-black text-[#e9d8fd]" : "bg-transparent  text-black"
              } ${styles.button_end}`}
            >
              Type
            </button>
          </div>
        </div>
        <div className="w-full h-[5px] rounded-3xl bg-pink-300 my-3"></div>
        <div className="my-10 w-full">
          <div className="my-5">
            <ul>
              <li className="mb-1">
                <ul className="ml-5 ">
                  <li className="mb-1">{api_text.para1}</li>
                </ul>
              </li>
              <li className="mb-1">
                <ul className="ml-5">
                  <li className="mb-1">{api_text.para3}</li>
                </ul>
              </li>
            </ul>
          </div>
          {topic == 1 && <Auth />}
          {topic == 2 && <Docu />}
          {topic == 3 && <Endpt />}
          {topic == 4 && <Purpose />}
          {topic == 5 && <Rate />}
          {topic == 6 && <Req_Res />}
          {topic == 7 && <Type />}
        </div>
      </div>
    </div>
  );
}

export default Api;
