import styled from "styled-components";
import React from "react";

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

function App() {
    return (
        <div className="App">
            <Container>
                <Panel>
                    <Current></Current>
                    <OtherCities></OtherCities>
                </Panel>
            </Container>
        </div>
    );
}

export default App;
