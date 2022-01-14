import get from "./get";

const SYDNEY_CITY_ID = "2147714";
const BRISBANE_CITY_ID = "2174003";
const PERTH_CITY_ID = "2063523";

const getWeathers = () => {
    return get.get("/group", {
        params: {
            id: [SYDNEY_CITY_ID, BRISBANE_CITY_ID, PERTH_CITY_ID].join(),
        },
    });
};

// const getWeathers = () =>
//     getMaps("/group", {
//         id: [SYDNEY_CITY_ID, BRISBANE_CITY_ID, PERTH_CITY_ID].join(),
//     });

// const getWeathers = () =>
//     get("/group", {
//         id: [SYDNEY_CITY_ID, BRISBANE_CITY_ID, PERTH_CITY_ID].join(),
//     });
export default getWeathers;
