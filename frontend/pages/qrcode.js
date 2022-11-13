import Image from "next/image";
import logo from "../public/iCheck-logo.png";
import styles from "../styles/Home.module.css";
import React from "react";
import Link from 'next/link';
import {useQRCode} from 'next-qrcode';


const Viewport = ({ w }) => {
  if (w < 900) {
    console.log(w);
    return Mobile;
  }
};
const Mobile = () => {
    const {Canvas} = useQRCode();
  return (
    <div className= {styles.body}>
    <Canvas
      text={'itlog'}
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#000000',
          light: '',
        },
      }}
    />
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
