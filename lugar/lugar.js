const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodedUrl = encodeURI(dir);
    const resp = await axios.get(`https://maps.google.com/maps/api/geocode/json?address=${encodedUrl}&key=???????????`);

    if (resp.data.results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.results[0];
    const direccion = data.address_components[0].long_name;
    const lat = data.geometry.location.lat;
    const lng = data.geometry.location.lng;
    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}