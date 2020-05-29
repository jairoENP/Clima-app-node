const axios = require('axios');

const getClima = async (lat,lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=a0608017658f6c8708186972d030bc9c&units=metric`);
                                 
    return resp.data.main.temp;
}


module.exports = {
    getClima
}