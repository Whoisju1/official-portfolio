const axios = require('axios');

const sendMessage = (contactInfo) => {
    // console.log('what Axios is sending back: ', contactInfo);
    return axios.post('/message', contactInfo);
};

export default sendMessage;