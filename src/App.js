import styled from "styled-components";
import React, { useState } from "react";

import background from "./asserts/background.jpg";
import Current from "./components/Current/Current";
import OtherCities from "./components/OtherCities/OtherCities";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background-image: url(${background});
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Panel = styled.div`
    border-radius: 32px;
    background-color: white;
    width: 800px;
    box-shadow: 0 0 16px rgb(0 0 0 /50%);
    overflow: hidden;
`;

const city_id_Melbourne = 2158177;

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { cityId: city_id_Melbourne };
//     }

//     handleChangeCityName = (cityId) => {
//         this.setState({
//             cityId,
//         });
//         // console.log("handle", cityId);
//     };

//     render() {
//         return (
//             <div className="App">
//                 <Container>
//                     <Panel>
//                         <Current cityId={this.state.cityId}></Current>
//                         <OtherCities
//                             cityId={this.state.cityId}
//                             handleChangeCityName={this.handleChangeCityName}
//                         ></OtherCities>
//                     </Panel>
//                 </Container>
//             </div>
//         );
//     }
// }

// //hooks 前
// function App() {
//     return (
//         <div className="App">
//             <Container>
//                 <Panel>
//                     <Current></Current>
//                     <OtherCities></OtherCities>
//                 </Panel>
//             </Container>
//         </div>
//     );
// }
// //hooks 前
function App() {
    const [cityId, setCityId] = useState(city_id_Melbourne);
    return (
        <div className="App">
            <Container>
                <Panel>
                    <Current cityId={cityId}></Current>
                    <OtherCities
                        cityId={cityId}
                        onCityClick={(id) => {
                            setCityId(id);
                        }}
                    ></OtherCities>
                </Panel>
            </Container>
        </div>
    );
}

export default App;
