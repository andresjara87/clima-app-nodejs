const clima = require('./clima/clima');
const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demmand: true
    }
}).argv;

console.log(argv);


const getInfo = async(dir) => {

    try {
        const coords = await lugar.getLugarLatLng(dir);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (error) {
        return `No se puede determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)
    /*
    lugar.getLugarLatLng(argv.direccion)
        .then(console.log)
        .catch(console.log)
    */
    /*
    clima.getClima(40.750000, -74.000000)
        .then(console.log)
        .catch(console.log)*/