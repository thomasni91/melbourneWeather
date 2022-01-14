import React from "react";
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
    padding: 10px 30px;
    font-size: 3rem;
`;

const Temperature = ({ children }) => {
    return (
        <Container>
            <span>{children}&deg;</span>
        </Container>
    );
};
export default Temperature;
