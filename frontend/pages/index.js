import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/index.module.css";
import Link from "next/link";
import global from "../function/api/global";
import Router from "next/router";
import { data_encrypt, data_decrypt } from "../function/crypto"

const loginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [error, setError] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(email.length==0 || password.length==0){
      setError(true)
    }
    if(email&&password){
      console.log("Email: ",email,"\nPassword: ",password)
    }
  }

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
        <form className={styles.inner + " " + styles.cover} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            placeholder="User"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error&&email.length<=0?
          <label className={styles.label}>Email Can't Be Empty</label>:""}
          {error&&email.isLogin==null?
          <label className={styles.label}>Invalid Email</label>:""}
          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error&&password.length<=0?
          <label className={styles.label}>Password Can't Be Empty</label>:""}
          {error&&password.isLogin==null?
          <label className={styles.label}>Invalid Password</label>:""}
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
        </form>
      </div>
      <br />
      <p className={styles.devs}>iCheck Web App v0.1.PhobusCalisto.2022</p>
    </div>
  );
};

export default loginPage;
