import axios from "axios";
const APIkey = "c120ba164344d60f3adb889e57f69955";

const get = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    params: {
        appid: APIkey,
        units: "metric",
    },
});
// const get = (url, params) =>
//     axios.get(`https://api.openweathermap.org/data/2.5${url}`, {
//         params: {
//             ...params,
//             units: "metric",
//             appid: APIkey,
//         },
//     });
export default get;
