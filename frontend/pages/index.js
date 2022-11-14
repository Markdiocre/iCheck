import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className="">
      <div className={styles.Header}>
        <Image src="/iCheck-logo.png" width={250} height={76} />
      </div>
      <div classname={styles.outer}>
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
}
