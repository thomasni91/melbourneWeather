import React from "react";
import styled from "styled-components";
const Container = styled.div`
    padding: 30px;
`;

const CityName = ({ children }) => (
    <Container>
        <span>{children}</span>
    </Container>
);
export default CityName;
