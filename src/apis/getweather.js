import get from "./get";

// const city_id_Melbourne = "2158177";

const getWeather = (id) =>
    get.get("/weather", {
        params: {
            id: id,
            // id: city_id_Melbourne,
        },
    });

// const getWeather = () =>
//     get("/weather", {
//         id: city_id_Melbourne,
//     });

export default getWeather;
