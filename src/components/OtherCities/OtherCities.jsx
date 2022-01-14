// import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getWeathers from "../../apis/getWeathers";
import City from "../City/City";

const Container = styled.div`
    padding: 20px 50px;
`;

const HeaderCity = styled.h3`
    padding-left: 25px;
`;

const Bottom = styled.div`
    display: flex;
`;

const CityContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    flex-basis: 80%;
    align-items: center;
`;

const city_id_Melbourne = 2158177;
const SYDNEY_CITY_ID = 2147714;
const BRISBANE_CITY_ID = 2174003;
const PERTH_CITY_ID = 2063523;
const cityIds = [
    city_id_Melbourne,
    SYDNEY_CITY_ID,
    BRISBANE_CITY_ID,
    PERTH_CITY_ID,
].join();

// //CLASS 结束版

// class OtherCities extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true };
//     }

//     currentGetWeathers() {
//         getWeathers(cityIds).then((response) => {
//             // console.log(response);
//             this.setState({
//                 loading: false,
//                 data: response.data.list.map((item) => ({
//                     key: item.id,
//                     id: item.id,
//                     cityName: item.name,
//                     temperature: item.main.temp,
//                     weather: item.weather[0].main,
//                     icon: item.weather[0].icon,
//                 })),
//             });
//             // console.log("3", this.state.cityId);

//             // console.log(this.state.data);
//         });
//     }
//     componentDidMount() {
//         // console.log(this.state.id);
//         this.currentGetWeathers();
//         // console.log("did");
//     }

//     // componentDidUpdate(previousProps, previousState) {
//     // }

//     render() {
//         const { data, loading } = this.state;
//         return (
//             <Container>
//                 {loading ? (
//                     <div>Loading</div>
//                 ) : (
//                     <React.Fragment>
//                         <HeaderCity>Other Cities</HeaderCity>
//                         <Bottom>
//                             <CityContainer>
//                                 {data.map((item) => {
//                                     // console.log(this.props.cityId);
//                                     if (this.props.cityId === item.id) {
//                                         return null;
//                                     }
//                                     return (
//                                         <City
//                                             onClick={() => {
//                                                 this.props.handleChangeCityName(
//                                                     item.id
//                                                 );
//                                             }}
//                                             key={item.key}
//                                             id={item.key}
//                                             cityName={item.cityName}
//                                             temperature={item.temperature}
//                                             weather={item.weather}
//                                             icon={item.icon}
//                                         />
//                                     );
//                                 })}
//                             </CityContainer>
//                         </Bottom>
//                     </React.Fragment>
//                 )}
//             </Container>
//         );
//     }
// }
// //CLASS 结束版

// //CLASS 提升前
// class OtherCities extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true };
//     }
//     componentDidMount() {
//         getWeathers(cityIds).then((response) => {
//             console.log(response);
//             this.setState({
//                 loading: false,
//                 data: response.data.list.map((item) => ({
//                     key: item.id,
//                     cityName: item.name,
//                     temperature: item.main.temp,
//                     weather: item.weather[0].main,
//                     icon: item.weather[0].icon,
//                 })),
//             });
//             console.log(this.state.data);
//         });
//     }

//     render() {
//         const { data, loading } = this.state;
//         return (
//             <Container>
//                 {loading ? (
//                     <div>Loading</div>
//                 ) : (
//                     <React.Fragment>
//                         <h5>Other Cities</h5>
//                         <Bottom>
//                             <CityContainer>
//                                 {data.map((item) => (
//                                     <City
//                                         key={item.key}
//                                         cityName={item.cityName}
//                                         temperature={item.temperature}
//                                         weather={item.weather}
//                                         icon={item.icon}
//                                     />
//                                 ))}
//                             </CityContainer>
//                         </Bottom>
//                     </React.Fragment>
//                 )}
//             </Container>
//         );
//     }
// }
// //CLASS 提升前

// //HOOKS

// const OtherCities = () => {
//     const [data, setData] = useState();
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         getWeathers(cityIds).then((response) =>
//             setData(
//                 response.data.list.map((item) => ({
//                     id: item.id,
//                     cityName: item.name,
//                     temperature: item.main.temp,
//                     icon: item.weather[0].icon,
//                 }))
//             )
//         );
//     }, []);

//     useEffect(() => {
//         if (!data) {
//             return null;
//         }
//         setLoading(false);
//     }, [data]);

//     return (
//         <Container>
//             {loading ? (
//                 <div>Loading</div>
//             ) : (
//                 <React.Fragment>
//                     <h5>Other Cities</h5>
//                     <Bottom>
//                         <CityContainer>
//                             {data.map((item) => (
//                                 <City
//                                     key={item.id}
//                                     cityName={item.cityName}
//                                     temperature={item.temperature}
//                                     weather={item.weather}
//                                     icon={item.icon}
//                                 />
//                             ))}
//                         </CityContainer>
//                     </Bottom>
//                 </React.Fragment>
//             )}
//         </Container>
//     );
// };

// //HOOKS

//HOOKS结束版

const OtherCities = ({ onCityClick, cityId }) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeathers(cityIds).then((response) =>
            setData(
                response.data.list.map((item) => ({
                    id: item.id,
                    cityName: item.name,
                    temperature: item.main.temp,
                    icon: item.weather[0].icon,
                    weather: item.weather[0].main,
                }))
            )
        );
    }, []);

    useEffect(() => {
        if (!data) {
            return null;
        }
        setLoading(false);
    }, [data]);

    return (
        <Container>
            {loading ? (
                <div>Loading</div>
            ) : (
                <React.Fragment>
                    <HeaderCity>Other Cities</HeaderCity>
                    <Bottom>
                        <CityContainer>
                            {data.map((item) => {
                                if (cityId === item.id) {
                                    return null;
                                }
                                return (
                                    <City
                                        onClick={() => {
                                            onCityClick(item.id);
                                        }}
                                        key={item.id}
                                        cityName={item.cityName}
                                        temperature={item.temperature}
                                        weather={item.weather}
                                        icon={item.icon}
                                    />
                                );
                            })}
                        </CityContainer>
                    </Bottom>
                </React.Fragment>
            )}
        </Container>
    );
};

//HOOKS 结束版

export default OtherCities;
