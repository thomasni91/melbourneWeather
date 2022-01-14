import React from "react";
import styled from "styled-components";

const CityNameButton = styled.button`
    border: transparent;
    background-color: transparent;
    padding-left: 0;
    cursor: pointer;
    color: black;
`;

const Unit = styled.div`
    text-align: center;
`;
const Image = styled.img`
    width: 40px;
    height: 100%;
`;

// //

// class City extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { cityId: this.props.id };
//     }
// handleChangeCityName(cityId) {
//     this.setState({
//         cityId,
//     });
//     console.log(this.state.cityId);
// }

//     render() {
//         const { cityName, temperature, icon, id } = this.props;
//         const address = `https://openweathermap.org/img/wn/${icon}@2x.png`;

//         return (
//             <React.Fragment>
//                 <CityNameButton>
//                     <Unit onClick={() => this.handleChangeCityName(id)}>
//                         {cityName}
//                     </Unit>
//                 </CityNameButton>
//                 <Unit>{`${temperature}\u2103`}</Unit>
//                 <Unit>
//                     <Image src={address} alt="weather" />
//                 </Unit>
//             </React.Fragment>
//         );
//     }
// }
// //

//自己添加像P1那样的button click
const City = ({ cityName, temperature, weather, icon, onClick }) => {
    const address = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    return (
        <React.Fragment>
            <CityNameButton>
                <Unit onClick={() => onClick()}>{cityName}</Unit>
            </CityNameButton>
            <Unit>{`${temperature}\u2103`}</Unit>
            <Unit>{weather}</Unit>
            <Unit>
                <Image src={address} alt="weather" />
            </Unit>
        </React.Fragment>
    );
};
//自己添加像P1那样的button click

// //提升前
// const City = ({ cityName, temperature, icon }) => {
//     const address = `https://openweathermap.org/img/wn/${icon}@2x.png`;
//     return (
//         <React.Fragment>
//             <CityNameButton>
//                 <Unit>{cityName}</Unit>
//             </CityNameButton>
//             <Unit>{`${temperature}\u2103`}</Unit>
//             <Unit>
//                 <Image src={address} alt="weather" />
//             </Unit>
//         </React.Fragment>
//     );
// };
// //提升前
export default City;
