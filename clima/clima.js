const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ba93b6e9f8c40684df1268d978b55298&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}