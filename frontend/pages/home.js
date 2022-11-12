import Image from "next/image";
import { useEffect } from "react";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from 'next/link';


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
        <a href = "">LogOut</a> {/* papalitan nalang ng icon to */}
      </div>
    
      <div className = {styles.body1}>
        <div className = {styles.box1 + " " + styles.cover}>
            <p>Your current health state is monitored everyday by iCheck. The inquiries should be honestly and regularly answered.</p>
        </div>
        
      </div>
      <div className = {styles.body2}>
        <div className = {styles.box2 + " " + styles.cover2}>
            Do you Experience:
            <div className = {styles.buttons}>
            <button className = {styles.button1 + " " + styles.cover3}>Cough and/or Colds</button>
            <button className = {styles.button2}>Spre Throat</button>
            <button className = {styles.button3}>Fatigue/Tireness</button>
            <button className = {styles.button4}>Headache</button>
            <button className = {styles.button5}>Body Pains</button>
            <button className = {styles.button6}>Dizzininess</button>
            <button className = {styles.button7}>Fever</button>
            <button className = {styles.button8}>Diarrhea</button>
            <button className = {styles.button9}>Did you have any of the symptoms above in the last 3 days</button>
            <button className = {styles.button10}>Have you had face-to-face contact with a probable or confirmed Covid 19 case within 1 meter and for more than 15 minutes for the past 14 days?</button>
            <button className = {styles.button11}>Have you provided direct care for a patient with probable or confirmed COVID 19 case without using proper personal protective equipment for the past 14 days?
</button>
        </div>

        </div>
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
