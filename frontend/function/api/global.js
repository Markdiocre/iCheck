// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import crypto from "../crypto";
import Router from "next/router";

axios.defaults.baseURL = "http://localhost:4000";

function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}
const login = (request) => {
  const m = crypto.data_encrypt(request);
  axios
    .post("/api/auth/login", { m })
    .then(function (res) {
      // console.log(res);
      const data = crypto.data_decrypt(res.data.m);
      localStorage.setItem("m", data.payload.token);
      Router.push("/home");
    })
    .catch(function (err) {
      // console.log(err);
    })
    .finally(function () {});
};
export default { handler, login };
