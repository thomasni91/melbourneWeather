import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

const Container = styled.div`
    opacity: 0.5;
`;

const Subtext = ({ children }) => (
    <Container>
        <span>{children}</span>
    </Container>
);
export default Subtext;
