const mysql = require("mysql");
const config = require("../configs/connection");
const express = require("express");
const router = express.Router();

const { data_decrypt } = require("../methods/global");

router.post("/", async (req, res) => {
  try {
    const decyphered = data_decrypt(req.body.m);
    const sql = "SELECT * FROM token WHERE token_value = ? LIMIT 1";
    const connection = await mysql.createConnection(config);

    connection.query(
      {
        sql: sql,
        timeout: 500,
        values: [decyphered.token_value],
      },
      function (error, result) {
        if (error) {
          res.send({ message: "Error: Cannot enter token is unrecognizable" });
        } else {
          if (result.length == 1) {
            const insertSql =
              "INSERT INTO health_check(`student_number`,`temp`,`fever`,`cough`,`body_pain`,`sore_throat`,`tiredness`,`headache`,`diarrhea`,`ageusia`,`anosmia`,`dyspnea`,`dizziness`,`cold`,`acquired_symptoms`,`covid_interaction`,`caring_infected_patient`) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            const health_check = {
              student_number: result[0].student_number,
              temp: decyphered.temp,
              fever: decyphered.fever,
              cough: decyphered.cough,
              body_pain: decyphered.body_pain,
              sore_throat: decyphered.sore_throat,
              tiredness: decyphered.tiredness,
              headache: decyphered.headache,
              diarrhea: decyphered.diarrhea,
              ageusia: decyphered.ageusia,
              anosmia: decyphered.anosmia,
              dyspnea: decyphered.dyspnea,
              dizziness: decyphered.dizziness,
              cold: decyphered.cold,
              acquired_symptoms: decyphered.acquired_symptoms,
              covid_interaction: decyphered.covid_interaction,
              caring_infected_patient: decyphered.caring_infected_patient,
            };
            if (health_check.temp <= 37.5 && health_check.temp >= 35.5) {
              res.send({ message: "not ok" });
            } else if (
              health_check.fever == 0 &&
              health_check.cough == 0 &&
              health_check.body_pain == 0 &&
              health_check.sore_throat == 0 &&
              health_check.tiredness == 0 &&
              health_check.headache == 0 &&
              health_check.diarrhea == 0 &&
              health_check.ageusia == 0 &&
              health_check.anosmia == 0 &&
              health_check.dyspnea == 0 &&
              health_check.dizziness == 0 &&
              health_check.cold == 0 &&
              health_check.acquired_symptoms == 0 &&
              health_check.covid_interaction == 0 &&
              health_check.caring_infected_patient == 0
            ) {
              res.send({ message: "ok" });
            } else {
              res.send({ message: "not ok" });
            }

            connection.query(
              {
                sql: insertSql,
                timeout: 5000,
                values: [
                  health_check.student_number,
                  health_check.temp,
                  health_check.fever,
                  health_check.cough,
                  health_check.body_pain,
                  health_check.sore_throat,
                  health_check.tiredness,
                  health_check.headache,
                  health_check.diarrhea,
                  health_check.ageusia,
                  health_check.anosmia,
                  health_check.dyspnea,
                  health_check.dizziness,
                  health_check.cold,
                  health_check.acquired_symptoms,
                  health_check.covid_interaction,
                  health_check.caring_infected_patient,
                ],
              }
            );
          } else {
            res.send({
              message: "Error: Cannot enter token is unrecognizable",
            });
          }
        }
      }
    );
  } catch (e) {
    res.send({ message: "server crashed" });
  }
});

module.exports = router;
