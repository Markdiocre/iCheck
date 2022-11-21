import { useState } from "react";
import styles from "../styles/buttonform.module.css";

const ButtonformComponent = () => {
  var [formObject, setFormObject] = useState([
    {
      id: 0,
      sickness: "Cough and/or Colds",
      isshort: true,
      sick: true,
    },
    {
      id: 1,
      sickness: "Sore Throat",
      isshort: true,
      sick: true,
    },
    {
      id: 2,
      sickness: "Fatigue / Tireness",
      isshort: true,
      sick: true,
    },
    {
      id: 3,
      sickness: "Headache",
      isshort: true,
      sick: true,
    },
    {
      id: 4,
      sickness: "Body Pains",
      isshort: true,
      sick: true,
    },
    {
      id: 5,
      sickness: "Dizziness",
      isshort: true,
      sick: true,
    },
    {
      id: 6,
      sickness: "Loss of Taste or Smell",
      isshort: true,
      sick: true,
    },
    {
      id: 7,
      sickness: "Difficulty Breathing",
      isshort: true,
      sick: true,
    },
    {
      id: 8,
      sickness: "Fever",
      isshort: true,
      sick: true,
    },
    {
      id: 9,
      sickness: "Diarhea",
      isshort: true,
      sick: true,
    },
    {
      id: 10,
      sickness: "Did you have any of the symptoms above in the last 3 days",
      isshort: true,
      sick: true,
    },
    {
      id: 11,
      sickness:
        "Have you had face-to-face contact with a probable or comfirmed Covid 19 case within 1 meter and for more than 15 minutes for the past 14 days?",
      isshort: false,
      sick: true,
    },
    {
      id: 12,
      sickness:
        "Have you provided direct care for a patient with probable or confirmed COVID 19 case without using proper personal protective equipment for the past 14 days?",
      isshort: false,
      sick: true,
    },
  ]);

  return (
    <div className="container-sm d-flex flex-wrap flex-row w-sm gap-3 justify-content-center">
      {formObject.map((obj) => {
        // console.log(obj.id);
        return (
          <div
            key={obj.id}
            className={[
              styles.buttonborder,
              obj.isshort ? styles.buttonshort : styles.buttonlong,
            ].join(" ")}
            style={
              obj.sick
                ? { backgroundColor: "#89C937" }
                : { backgroundColor: "#A83746" }
            }
            onClick={() => {
              // console.log(obj);

              let newArr = [...formObject];

              newArr[obj.id].sick = newArr[obj.id].sick ? false : true;
              setFormObject([...newArr]);
              //   console.table(formObject);
            }}
          >
            {obj.sickness}
            {obj.sick ? <p>YES</p> : <p>NO</p>}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonformComponent;
