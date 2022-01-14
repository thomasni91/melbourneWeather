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
    padding: 0 30px;
    font-size: 1.5rem;
    padding-left: 50px;
`;
// getWeather();

// const getWeather = () => {
//     return axios.get(
//         `https://api.openweathermap.org/data/2.5/weather?id=${city_id_Melbourne}&appid=${APIkey}`
//     );
// };

// //CLASS
// class Current extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true };
//     }

//     componentDidMount() {
//         getWeather().then((response) => {
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
//             console.log(this.state.data);
//         });
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
//                         </div>
//                         <CityName>{data.cityName}</CityName>
//                     </React.Fragment>
//                 )}
//             </Container>
//         );
//     }
// }
// //CLASS

//HOOKS
function Current() {
    const [data, setData] = useState();

    const [loading, setLoaing] = useState(true);

    useEffect(() => {
        getWeather().then((response) =>
            setData({
                cityName: response.data.name,
                temperature: response.data.main.temp,
                humidity: response.data.main.humidity,
                weather: response.data.weather[0].main,
                wind: response.data.wind.speed,
            })
        );
    }, []);

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
}

//HOOKS

export default Current;
