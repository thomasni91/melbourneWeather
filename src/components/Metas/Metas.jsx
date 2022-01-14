import React from "react";
import styled from "styled-components";
import Meta from "./Meta/Meta";

const Container = styled.div`
    padding: 0 30px;
    font-size: 1.5rem;
    display: flex;
`;

const Metas = ({ humidity, wind }) => (
    <Container>
        <Meta title="humidity">{humidity}</Meta>
        <Meta title="wind">{wind}</Meta>
    </Container>
);
export default Metas;
