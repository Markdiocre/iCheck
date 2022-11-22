import CryptoJS from "crypto-js";
import SECRET_KEY from "./key";
const Encrypt = (plain) => {
  var ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(plain),
    SECRET_KEY
  ).toString();
  return { m: ciphertext };
};
export default Encrypt;
