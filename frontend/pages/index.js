import Image from "next/image";
import { useEffect } from "react";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/index.module.css";
import React from "react";
import Link from "next/link";
import global from "../function/api/global";
import Router from "next/router";

import { useState } from "react";

const Viewport = ({ w }) => {
  if (w < 900) {
    // console.log(w);
    return Mobile();
  } else {
    return Desktop();
  }
};

const Mobile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="">
      <div className={styles.Header}>
        <Image
          src={logo}
          alt="missing logo"
          priority
          width={350}
          height={100}
        />
      </div>
      <div className={styles.outer}>
        <div className={styles.inner + " " + styles.cover}>
          <input
            className={styles.input}
            type="text"
            placeholder="User"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={styles.login_btn + " " + styles.link}
            onClick={() => {
              global.login({
                student_number: email,
                student_password: password,
              });
            }}
          >
            {/* <Link href="/home" className={styles.link}> */}
            Login
            {/* </Link> */}
          </button>
        </div>
      </div>
      <br />
      <p className={styles.devs}>iCheck Web App v0.1.PhobusCalisto.2022</p>
    </div>
  );
};

const Desktop = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div style={{ height: "80vh" }}>
      <div className={styles.front}>
        <div>
          <div>
            <Image
              src={logo}
              alt="missing logo"
              priority
              width={250}
              height={76}
            />
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={"currentColor"}
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div className={styles.inputdiv}>
            <input
              type="password"
              className={styles.noinput}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={"currentColor"}
              className={styles.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <button
            className={styles.login_btn + " " + styles.link}
            onClick={() => {
              global.login({
                student_number: email,
                student_password: password,
              });
            }}
          >
            {/* <Link href="/home" className={styles.link}> */}
            Login
            {/* </Link> */}
          </button>
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
  const handleResize = () => {
    SetWidth(window.innerWidth);
  };
  React.useEffect(() => {
    const islogin = localStorage.getItem("m");
    if (islogin != null) {
      Router.push("/home");
    }
    SetWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // const width = window.innerWidth;
    // console.log(width);
  });
  return (
    <div>
      {/* <Desktop /> */}
      <Viewport w={width} />
    </div>
  );
}
