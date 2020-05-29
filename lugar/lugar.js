
const axios = require('axios');


const getLugarLatLng = async (dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
                    'x-rapidapi-key': 'f394a09466msh25e43202033e668p139d05jsn77e863b0ea94',
                    'useQueryString': 'true'     }
        });
    

        const resp = await instance.get();

        if(resp.data.Results.length === 0){
            throw new Error(`No hay resultados para ${dir}`);
        }

        const {name:direccion, lat, lon:lng} = resp.data.Results[0];

        return {
            direccion,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLng
}











