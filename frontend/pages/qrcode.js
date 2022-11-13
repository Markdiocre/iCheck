import Image from "next/image";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/qrcode.module.css";
import React from "react";
import {useQRCode} from 'next-qrcode';
import back from "../public/back.png";
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
    const {Canvas} = useQRCode();
  return (
    <div className= {styles.body}>
      <div className={styles.Header2}>
      <Link className={styles.back} href = "/home">
        <Image src={back} width={40} height={40} />
      </Link> 
      <div className = {styles.code}><b>Generated QR Code</b></div>
    </div>
    <div className = {styles.body1}>
      <div className = {styles.box1}>
    <Canvas
      text={'itlog'} /* yung ibabato na mga sagot d2 papasok */
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 300,
        color: {
          dark: '#000000',
          light: '',
        },
      }}
    />
    <div className = {styles.credentials}>
    <div className = {styles.date}>November 1, 2022</div>
    <div className = {styles.firstname}>Johnlorenz</div>
    <div className = {styles.lastname}>Alcantara</div>
    <div className = {styles.studnum}>202011020</div>
    </div>
    </div>
    </div>
    </div>
    
  );
};
const Desktop = () => {
  const {Canvas} = useQRCode();
  return (
    <div className = {styles.body} style={{ height: "130vh" }}>
    <div className={styles.Header3}>
      <a className={styles.back} href = "/home">
        <Image src={back} width={40} height={40} />
      </a> 
      <div className = {styles.code}><b>Generated QR Code</b></div>
    </div>
    <div className = {styles.body2}>
      <div className = {styles.box2}>
    <Canvas
      text={'itlog'} /* yung ibabato na mga sagot d2 papasok */
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 400,
        color: {
          dark: '#000000',
          light: '',
        },
      }}
    />
    </div>
    </div>
    <div className = {styles.body3}>
      <div className = {styles.box3}>
    <div className = {styles.credentials}>
    <div className = {styles.firstname}>JOHNLORENZ</div>
    <div className = {styles.lastname}>ALCANTARA</div>
    <div className = {styles.course}>BSCS</div>
    <div className = {styles.studnum1}>202011020</div>
    <div className = {styles.date1}>November 1, 2022</div>
    </div>
    </div>
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

