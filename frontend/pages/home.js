import Image from "next/image";
import logo from "../public/iCheck-logo.png";
import logout from "../public/logout.png";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from 'next/link'

const Viewport = ({ w }) => {
  if (w < 900) {
    console.log(w);
    return Mobile;
  }
};
const Mobile = () => {
  return (
    <div className= {styles.body}>
    <div className={styles.Header2}>
      <Image src={logo} width={100} height={30} />
      <div><b>Alcantara J.</b></div>
      <a className={styles.logout} href = "/index">
        <Image src={logout} width={30} height={30} />
      </a> 
    </div>
  
    <div className = {styles.body1}>
      <div className = {styles.box1}>
          <p>Your current health state is monitored everyday by iCheck. The inquiries should be honestly and regularly answered.</p>
      </div>
    </div>

    <div className = {styles.body2}>
      <div className = {styles.box2}>
          <p className = {styles.disclaimersentence}>Do you Experience:</p>
        <div>
          {/*FIRST ROW OF BUTTONS*/}
          <div className={styles.buttonsdivrow}>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES} type="button">
                Cough and/or Colds
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Sore Throat
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
          </div>
          {/*SECOND ROW OF BUTTONS*/}
          <div className={styles.buttonsdivrow}>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Fatigue / Tireness
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Headache
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
          </div>
          {/*THIRD ROW OF BUTTONS*/}
          <div className={styles.buttonsdivrow}>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Body Pains
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Dizzininess
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
          </div>
          {/*FOURTH ROW OF BUTTONS*/}
          <div className={styles.buttonsdivrow}>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Loss of Taste or Smell
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Difficulty Breathing
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
          </div>
          {/*FIFTH ROW OF BUTTONS*/}
          <div className={styles.buttonsdivrow}>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Fever
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
            <div className={styles.buttonsdiv}>
              <button className = {styles.buttonYES}>
                Diarrhea
                <p className={styles.yesandno}>YES</p>
              </button>
            </div>
          </div>
          {/*FIRST ROW OF BUTTONS QUESTION*/}
          <div className = {styles.buttonsdiv1}>
              <button className = {styles.buttonquestion1YES}>
                <div className={styles.textalign}>
                  Did you have any of the symptoms above in the last 3 days
                </div>
                <div className={styles.textalign}>
                  <p className={styles.yesandno}>YES</p>
                </div>
              </button>
          </div>
          {/*SECOND ROW OF BUTTONS QUESTION*/}
              <div className={styles.buttonsdivrow}>
                <div className={styles.buttonsdiv}>
                  
                  <button className = {styles.buttonquestion2YES}>
                    Have you had face-to-face contact with a probable or confirmed Covid 19 case within 1 meter and for more than 15 minutes for the past 14 days?
                    <p className={styles.yesandno}>YES</p>
                  </button>
                </div>
              <div className={styles.buttonsdiv}>
                <div className={styles.buttonsdiv}>
                  <button className = {styles.buttonquestion2YES}>
                    Have you provided direct care for a patient with probable or confirmed COVID 19 case without using proper personal protective equipment for the past 14 days?
                    <p className={styles.yesandno}>YES</p>
                  </button>
                </div>
              </div>
          </div>
          {/*STILL NEEDS NEXT.JS VALIDATION*/}
          <div className={styles.tempdiv}>
              <form className={styles.tempformdiv} action="/send-data-here">
                <label className={styles.label} for="temperature">Input Current Temperature</label><br></br>
                <input 
                  className={styles.input}
                  type="number" 
                  id="temperature"
                  name="temperature"
                  minlength="2"
                  maxlength="10"
                  required
                  placeholder="In Celcius"
                />
              </form>
            </div>

        </div>
      </div>
    </div>
    <div className = {styles.body1}>
      <div className = {styles.box1}>
          <p className={styles.disclaimersentence2}>I give my full authorization for Gordon College to gather and use the data specified below for contact tracing and controlling the COVID-19 transmission. I am fully and completely aware that RA 10173, also known as the Data Privacy Act of 2012, protects the privacy of my personal information.</p>
      </div>
    </div>
    <div className={styles.authorization}>
      <div className={styles.authorizebuttondiv}>
      <input name="consent" type="checkbox" id="acceptTerms" className={`form-check-input  'is-invalid' : ''}`} />
      <label htmlFor="acceptTerms" className="form-check-label">I consent to the information being collected and used in accordance with the aforementioned policy.</label>      
    </div>
    <div></div>
    </div>
    <div className = {styles.Submitbg}>
    <button  className = {styles.Submit}>
    <Link href ="/qrcode">Submit</Link>
    </button>
      </div>
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
