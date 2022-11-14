const CryptoJS = require("crypto-js");
const key = require('../configs/keys')

function response_payload(payload, remarks, message){
    let status = {
        remarks: remarks,
        message : message
    }
    return {
        status: status,
        payload: payload,
        time_stamp: new Date().toLocaleString()
    }
    
    
}

function data_encrypt(plain){
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(plain), key).toString();

    return {"m":ciphertext}
}

function data_decrypt(enc){
    var bytes  = CryptoJS.AES.decrypt(enc, key);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}

module.exports = {response_payload, data_encrypt, data_decrypt}