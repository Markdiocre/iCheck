import Image from "next/image";
import { useEffect } from "react";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/index.module.css";
import React from "react";

const Viewport = ({ w }) => {
  if (w < 900) {
    console.log(w);
    return Mobile;
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

export default function Home() {
  React.useEffect(() => {
    const width = window.innerWidth;
    console.log(width);
  });
  return (
    <div>
      <Mobile />
      {/* <Viewport /> */}
    </div>
  );
}
