import CryptoJS from "crypto-js";
import SECRET_KEY from "./key";

function data_encrypt (plain)  {
  const ciphertext = CryptoJS.AES.encrypt(
    JSON.stringify(plain),
    SECRET_KEY
  ).toString();
  return ciphertext;
  // return { m: ciphertext };
};

function data_decrypt (enc) {
  const bytes = CryptoJS.AES.decrypt(enc, SECRET_KEY);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  return decryptedData;
};
export default { data_encrypt, data_decrypt };
