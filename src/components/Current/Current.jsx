import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Metas from "../Metas/Metas";
import Subtext from "../Subtext/Subtext";
import Temperature from "../Temperature/Temperature";
import background from "../../asserts/background.jpg";
import CityName from "../CityName/CityName";
import getWeather from "../../apis/getweather";

const Container = styled.div`
    background-image: url(${background});
    background-size: cover;
    background-position: center;
    padding: 20px;
    color: white;
    display: flex;
    justify-content: space-between;
`;

const Weather = styled.div`
    text-align: center;
    padding: 0 30px;
    font-size: 1.5rem;
`;
// getWeather();

// const getWeather = () => {
//     return axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?id=${city_id_Melbourne}&appid=${APIkey}`
//     );
// };

// //CLASS 提升

// class Current extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true };
//     }

//     currentGetWeather() {
//         const { cityId } = this.props;

//         getWeather(cityId).then((response) => {
//             // console.log(response);
//             this.setState({
//                 loading: false,
//                 data: {
//                     cityName: response.data.name,
//                     temperature: response.data.main.temp,
//                     humidity: response.data.main.humidity,
//                     weather: response.data.weather[0].main,
//                     wind: response.data.wind.speed,
//                 },
//             });
//         });
//     }
//     componentDidMount() {
//         this.currentGetWeather();
//     }
//     componentDidUpdate(previousProps, previousState) {
//         // console.log(previousState, this.state);
//         const { cityId } = this.props;

//         if (cityId !== previousProps.cityId) {
//             this.setState({
//                 loading: true,
//             });
//             this.currentGetWeather();
//         }
//     }

//     render() {
//         const { data, loading } = this.state;

//         return (
//             <Container>
//                 {loading ? (
//                     <div>Loading...</div>
//                 ) : (
//                     <React.Fragment>
//                         <div>
//                             <Temperature>{data.temperature}</Temperature>
//                             <Weather>
//                                 <Subtext>{data.weather}</Subtext>
//                             </Weather>
//                             <Metas
//                                 humidity={`${data.humidity}%`}
//                                 wind={`${data.wind}KM/H`}
//                             ></Metas>
//                         </div>
//                         <CityName>{data.cityName}</CityName>
//                     </React.Fragment>
//                 )}
//             </Container>
//         );
//     }
// }
// //CLASS 提升

// //CLASS
// const city_id_Melbourne = "2158177";
// const SYDNEY_CITY_ID = "2147714";

// class Current extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true, cityId: city_id_Melbourne };
//     }

//     handleChangeCityName = (cityId) => {
//         this.setState({ cityId });
//     };

//     currentGetWeather() {
//         const { cityId } = this.state;

//         getWeather(cityId).then((response) => {
//             // console.log(response);
//             this.setState({
//                 loading: false,
//                 data: {
//                     cityName: response.data.name,
//                     temperature: response.data.main.temp,
//                     humidity: response.data.main.humidity,
//                     weather: response.data.weather[0].main,
//                     wind: response.data.wind.speed,
//                 },
//             });
//         });
//     }
//     componentDidMount() {
//         this.currentGetWeather();
//     }
//     componentDidUpdate(previousProps, previousState) {
//         // console.log(previousState, this.state);
//         const { cityId } = this.state;

//         if (cityId !== previousState.cityId) {
//             this.setState({
//                 loading: true,
//             });
//             this.currentGetWeather();
//         }
//     }

//     render() {
//         const { data, loading } = this.state;

//         return (
//             <Container>
//                 {loading ? (
//                     <div>Loading...</div>
//                 ) : (
//                     <React.Fragment>
//                         <div>
//                             <Temperature>{data.temperature}</Temperature>
//                             <Weather>
//                                 <Subtext>{data.weather}</Subtext>
//                             </Weather>
//                             <Metas
//                                 humidity={`${data.humidity}%`}
//                                 wind={`${data.wind}km/h`}
//                             ></Metas>
//                             <button
//                                 onClick={() => {
//                                     this.handleChangeCityName(SYDNEY_CITY_ID);
//                                 }}
//                             >
//                                 sydney
//                             </button>
//                         </div>
//                         <CityName>{data.cityName}</CityName>
//                     </React.Fragment>
//                 )}
//             </Container>
//         );
//     }
// }
// //CLASS

// //HOOKS
// const city_id_Melbourne = 2158177;
// const SYDNEY_CITY_ID = 2147714;
// function Current() {
//     const [cityId, setCityId] = useState(city_id_Melbourne);
//     const [data, setData] = useState();

//     const [loading, setLoaing] = useState(true);

//     useEffect(() => {
//         setLoaing(true);
//         getWeather(cityId).then((response) =>
//             setData({
//                 cityName: response.data.name,
//                 temperature: response.data.main.temp,
//                 humidity: response.data.main.humidity,
//                 weather: response.data.weather[0].main,
//                 wind: response.data.wind.speed,
//             })
//         );
//     }, [cityId]);

//     useEffect(() => {
//         if (!data) {
//             return null;
//         }
//         setLoaing(false);
//     }, [data]);

//     return (
//         <Container>
//             {loading ? (
//                 <div>Loading...</div>
//             ) : (
//                 <React.Fragment>
//                     <div>
//                         <Temperature>{data.temperature}</Temperature>
//                         <Weather>
//                             <Subtext>{data.weather}</Subtext>
//                         </Weather>
//                         <Metas
//                             humidity={`${data.humidity}%`}
//                             wind={`${data.wind}km/h`}
//                         ></Metas>
//                         <button
//                             onClick={() => {
//                                 setCityId(SYDNEY_CITY_ID);
//                             }}
//                         >
//                             sydney
//                         </button>
//                     </div>
//                     <CityName>{data.cityName}</CityName>
//                 </React.Fragment>
//             )}
//         </Container>
//     );
// }

// //HOOKS

//HOOKS 结束版
const Current = ({ cityId }) => {
    // function Current({ cityId }) {
    const [data, setData] = useState();

    const [loading, setLoaing] = useState(true);

    useEffect(() => {
        setLoaing(true);
        getWeather(cityId).then((response) =>
            setData({
                cityName: response.data.name,
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity,
                weather: response.data.weather[0].main,
                wind: response.data.wind.speed,
            })
        );
    }, [cityId]);

    useEffect(() => {
        if (!data) {
            return null;
        }
        setLoaing(false);
    }, [data]);

    return (
        <Container>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <React.Fragment>
                    <div>
                        <Temperature>{data.temperature}</Temperature>
                        <Weather>
                            <Subtext>{data.weather}</Subtext>
                        </Weather>
                        <Metas
                            humidity={`${data.humidity}%`}
                            wind={`${data.wind}km/h`}
                        ></Metas>
                    </div>
                    <CityName>{data.cityName}</CityName>
                </React.Fragment>
            )}
        </Container>
    );
};

//HOOKS 结束版

export default Current;
