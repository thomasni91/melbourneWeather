import React from "react";
import styled from "styled-components";
import Subtext from "../../Subtext/Subtext";
const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-right: 20px;
`;

const Meta = ({ title, children }) => (
    <Container>
        <Subtext>{title}</Subtext>
        <Subtext>{children}</Subtext>
    </Container>
);
export default Meta;
