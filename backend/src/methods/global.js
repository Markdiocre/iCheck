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

module.exports = {response_payload}