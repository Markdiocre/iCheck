import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../public/iCheck-logo.png";
import logout from "../public/logout.png";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import ButtonformComponent from "../components/button";
import Router from "next/router";


const Mobile = () => {
  const [temperature, setTemperature] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(temperature.length==0){
      setError(true)
    }
    if(temperature){
      console.log("Temperature: ", temperature)
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.Header2}>
        <Image src={logo} alt="missing logo" priority width={100} height={30} />
        <div>
          <b>Alcantara J.</b>
        </div>
        <Link className={styles.logout} href="/index">
          <Image
            src={logout}
            alt="logout icon"
            priority
            width={30}
            height={30}
          />
        </Link>
      </div>

      <div className={styles.body1}>
        <div className={styles.box1}>
          <p>
            Your current health state is monitored everyday by iCheck. The
            inquiries should be honestly and regularly answered.
          </p>
        </div>
      </div>

      <div className={styles.body2}>
        <div className={styles.box2}>
          <p className={styles.disclaimersentence}>Do you Experience:</p>
          <div>
            <ButtonformComponent />

            <div className={styles.tempdiv}>
              <form className={styles.tempformdiv} action="/send-data-here" onSubmit={handleSubmit}>
                <label className={styles.label}>
                  Input Current Temperature
                </label>
                <br></br>
                <input
                  className={styles.input}
                  type="number"
                  id="temperature"
                  name="temperature"
                  required
                  value={temperature}
                  placeholder="In Celcius"
                  onChange={(e) => setTemperature(e.target.value)}
                />
                {error&&temperature.length<=0?
                <label className={styles.label}>Temperature Can't Be Empty</label>:""}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.body1}>
        <div className={styles.box1}>
          <p className={styles.disclaimersentence2}>
            I give my full authorization for Gordon College to gather and use
            the data specified below for contact tracing and controlling the
            COVID-19 transmission. I am fully and completely aware that RA
            10173, also known as the Data Privacy Act of 2012, protects the
            privacy of my personal information.
          </p>
        </div>
      </div>
      <div className={styles.authorization}>
        <div className={styles.authorizebuttondiv}>
          <input
            name="consent"
            type="checkbox"
            id="acceptTerms"
            className={`form-check-input  'is-invalid' : ''}`}
          />
          <label htmlFor="acceptTerms" className="form-check-label">
            I consent to the information being collected and used in accordance
            with the aforementioned policy.
          </label>
        </div>
        <div></div>
      </div>
      <div className={styles.Submitbg}>
        <button className={styles.Submit} onSubmit={handleSubmit}>
          <Link href="/qrcode">Submit</Link>
        </button>
      </div>
    </div>
  );
};

export default function Home() {
  React.useEffect(() => {
    const islogin = localStorage.getItem("m");
    if (islogin == null) {
      Router.push("/");
    }
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
