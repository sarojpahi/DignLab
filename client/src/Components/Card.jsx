import React from "react";
import "./card.css";
import { AnimatePresence, motion } from "framer-motion";
import { fadeIn } from "../App";
import { TextAnimation } from "./TextAnimation";
export const Card = ({ data, s, s2 }) => {
  return (
    <AnimatePresence>
      <div className="card">
        <div className="ImageBox">
          <div className="img" style={{ transform: s2 }}>
            <motion.div
              variants={fadeIn("down", 0.2, 1.0, 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false }}
            >
              <img src={data.clone} alt="clone" />
            </motion.div>
          </div>
        </div>
        <div className="cardBox" style={{ transform: s }}>
          <motion.div
            variants={fadeIn("up", 0.2, 1.0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false }}
          >
            <div className="textBox">
              <TextAnimation text={data.name} />
              <TextAnimation text={data.name} />
              <TextAnimation text={data.name} />
            </div>

            <div className="blade">
              <img src={data.blade} alt="blade" />
            </div>
            <div className="logo">
              <img src={data.logo} alt="logo" />
            </div>
          </motion.div>
          <div className="collection">
            <button>
              <span>see collention</span>

              <span>
                <svg
                  width="6"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1l3.573 3.573-.028 2.882L1 11"></path>
                </svg>
              </span>
              <span>
                <svg
                  width="6"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1l3.573 3.573-.028 2.882L1 11"></path>
                </svg>
              </span>
              <span>
                <svg
                  width="6"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1l3.573 3.573-.028 2.882L1 11"></path>
                </svg>
              </span>
              <span>
                <svg
                  width="6"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1l3.573 3.573-.028 2.882L1 11"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
