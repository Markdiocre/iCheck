const mysql = require("mysql");
const config = require("../configs/connection");
const express = require("express");
const router = express.Router();

const { data_decrypt } = require("../methods/global");

router.post("/", async (req, res) => {
  try {
    const decyphered = req.body.m;
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
          res.send({ message: "Error: Cannot enter, token is unrecognizable" });
        } else {
          if (result.length == 1) {
            const insertSql =
              "INSERT INTO `health_check`(`student_number`, `temp`, `acquired_symptoms`, `covid_interaction`, `caring_infected_patient`, `fever`, `cold`, `body_pains`, `sore_throat`, `fatigue_or_tiredness`, `headache`, `diarrhea`, `loss_of_taste_or_smell`, `difficulty_breathing`, `dizziness`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
            const health_check = {
              student_number: result[0].student_number,
              temp: decyphered.t,
              fever: decyphered.f,
              cold: decyphered.c,
              body_pains: decyphered.bp,
              sore_throat: decyphered.st,
              fatigue_or_tiredness: decyphered.fot,
              headache: decyphered.h,
              diarrhea: decyphered.d,
              loss_of_taste_or_smell: decyphered.lt,
              difficulty_breathing: decyphered.db,
              dizziness: decyphered.di,
              acquired_symptoms: decyphered.as,
              covid_interaction: decyphered.ci,
              caring_infected_patient: decyphered.cip,
            };
            
            console.log(health_check);
            if (health_check.temp >= 37.5 || health_check.temp <= 35.5) {
              res.send({ message: "not ok" });
            } else if (
              health_check.fever == 0 &&
              health_check.cold == 0 &&
              health_check.body_pains == 0 &&
              health_check.sore_throat == 0 &&
              health_check.fatigue_or_tiredness == 0 &&
              health_check.headache == 0 &&
              health_check.diarrhea == 0 &&
              health_check.loss_of_taste_or_smell == 0 &&
              health_check.difficulty_breathing == 0 &&
              health_check.dizziness == 0 &&
              health_check.acquired_symptoms == 0 &&
              health_check.covid_interaction == 0 &&
              health_check.caring_infected_patient == 0
            ) {
              res.send({ message: "ok" });
            } else {
              res.send({ message: "not ok" });
            }

            connection.query({
              sql: insertSql,
              timeout: 5000,
              values: [
                health_check.student_number,
                health_check.temp,
                health_check.acquired_symptoms,
                health_check.covid_interaction,
                health_check.caring_infected_patient,
                health_check.fever,
                health_check.cold,
                health_check.body_pains,
                health_check.sore_throat,
                health_check.fatigue_or_tiredness,
                health_check.headache,
                health_check.diarrhea,
                health_check.loss_of_taste_or_smell,
                health_check.difficulty_breathing,
                health_check.dizziness,
              ],
            });
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
