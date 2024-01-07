"use client";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
export default function Header() {
  const [drop, setDrop] = useState(false);
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`h-16 flex bg-white shadow-xl items-center fixed top-0 left-0 w-full`}
    >
      <div className={`mx-auto flex w-11/12`}>
        <div className="flex justify-between w-full items-center">
          <motion.div variants={slideInFromLeft(0.2)}>
            <span className="font-semibold text-xl">Shore Rentals</span>
          </motion.div>
          <motion.button
            variants={slideInFromRight(0.2)}
            onClick={() => setDrop(!drop)}
            className=" border-2 px-2 rounded-lg"
          >
            <img src="/menu.svg" className="w-10 flex" alt="" />
          </motion.button>
          <div
            className={
              drop ? "absolute top-16 left-0 bg-white w-full" : "hidden"
            }
          >
            <ul className="flex flex-col items-center justify-center gap-10 font-bold text-xl">
              <li className="mt-10">
                <Link href={""}>Home</Link>
              </li>
              <li>
                <Link href={""}>Features</Link>
              </li>
              <li>
                <Link href={""}>How to Book</Link>
              </li>
              <li>
                <Link href={""}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
