import React from "react";
import styled from "styled-components";

const Unit = styled.div`
    text-align: center;
`;
const Image = styled.img`
    width: 40px;
    height: 100%;
`;
const City = ({ cityName, temperature, icon }) => {
    const address = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <React.Fragment>
            <Unit>{cityName}</Unit>
            <Unit>{temperature}</Unit>
            <Unit>
                <Image src={address} alt="weather" />
            </Unit>
        </React.Fragment>
    );
};
export default City;
