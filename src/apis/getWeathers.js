import get from "./get";

const getWeathers = (id) => {
    return get.get("/group", {
        params: {
            id,
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
