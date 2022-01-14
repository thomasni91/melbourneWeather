import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

const Container = styled.div`
    padding-top: 5px;

    opacity: 0.75;
`;

const Subtext = ({ children }) => (
    <Container>
        <span>{children}</span>
    </Container>
);
export default Subtext;
