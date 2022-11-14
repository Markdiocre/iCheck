import Image from "next/image";
import { useEffect } from "react";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/index.module.css";
import React from "react";
import { useState } from "react";

const Viewport = ({ w }) => {
  if (w < 900) {
    console.log(w);
    return Mobile();
  } else {
    return Desktop();
  }
};
const Mobile = () => {
  return (
    <div className="">
      <div className={styles.Header}>
        <Image src={logo} width={250} height={76} />
      </div>
      <div className={styles.outer}>
        <div className={styles.inner + " " + styles.cover}>
          <input className={styles.input} type="text" placeholder="User" />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
          />
          <div className={styles.login_btn}>Login</div>
        </div>
      </div>
      <br />
      <p className={styles.devs}>iCheck Web App v0.1.CodeDementia.2022</p>
    </div>
  );
};
const Desktop = () => {
  return (
    <div style={{ height: "80vh" }}>
      <div className={styles.front}>
        <div>
          <div>
            <Image src={logo} width={250} height={76} />
          </div>
          <div className={styles.welcome}>
            <h2>WELCOME BACK GCIANS!</h2>
          </div>
        </div>
        <div className={styles.form}>
          <div>
            <h3>SIGN IN</h3>
          </div>
          <div className={styles.inputdiv}>
            <input
              type="email"
              className={styles.noinput}
              placeholder="Email"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className={styles.inputdiv}>
            <input
              type="password"
              className={styles.noinput}
              placeholder="Password"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={styles.icon}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={styles.bgcontainer}>
        <div className={styles.item + " " + styles.a1}></div>
        <div className={styles.item + " " + styles.a2}></div>
        <div className={styles.item + " " + styles.a3}></div>
        <div className={styles.item + " " + styles.a4}></div>
        <div className={styles.item + " " + styles.a5}></div>
        <div className={styles.item + " " + styles.a6}></div>
        <div className={styles.item + " " + styles.a7}></div>
        <div className={styles.item + " " + styles.a8}></div>
        <div className={styles.item + " " + styles.a9}></div>
        <div className={styles.item + " " + styles.a10}></div>
        <div className={styles.item + " " + styles.a11}></div>
        <div className={styles.item + " " + styles.a12}></div>
        <div className={styles.item + " " + styles.a13}></div>
        <div className={styles.item + " " + styles.a14}></div>
      </div>
    </div>
  );
};

export default function Home() {
  const [width, SetWidth] = useState();
  const [height, SetHeight] = useState();
  React.useEffect(() => {
    SetWidth(window.innerWidth);
    SetHeight(window.innerHeight);
    // const width = window.innerWidth;
    console.log(width);
  });
  return (
    <div>
      {/* <Desktop /> */}
      <Viewport w={width} />
    </div>
  );
}
