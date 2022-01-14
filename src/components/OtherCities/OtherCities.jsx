// import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import getWeathers from "../../apis/getWeathers";
import City from "../City/City";

const Container = styled.div`
    padding: 20px 50px;
`;

const Bottom = styled.div`
    display: flex;
`;

const CityContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    flex-basis: 50%;
    align-items: center;
`;

//CLASS
// class OtherCities extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { loading: true };
//     }
//     componentDidMount() {
//         getWeathers().then((response) => {
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
// //CLASS

//HOOKS

const OtherCities = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWeathers().then((response) =>
            setData(
                response.data.list.map((item) => ({
                    id: item.id,
                    cityName: item.name,
                    temperature: item.main.temp,
                    icon: item.weather[0].icon,
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
                    <h5>Other Cities</h5>
                    <Bottom>
                        <CityContainer>
                            {data.map((item) => (
                                <City
                                    key={item.id}
                                    cityName={item.cityName}
                                    temperature={item.temperature}
                                    weather={item.weather}
                                    icon={item.icon}
                                />
                            ))}
                        </CityContainer>
                    </Bottom>
                </React.Fragment>
            )}
        </Container>
    );
};

//HOOKS

export default OtherCities;
