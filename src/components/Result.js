import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import NavigationBar from "./Layout/NavigationBar";
import SideBar from "./Layout/SideBar";
import NameContext from "../Hooks/NameContext";
import GenderContext from "../Hooks/GenderContext";
import {Button} from "react-bootstrap";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = () => {

    const {name, setName} = useContext(NameContext);
    const {gender, setGender} = useContext(GenderContext);



    return (
        <>
            <div className="row grow result-div">
                <div className="col-lg-12 second-div">

                    <h2>
                        {gender == "Femme" ? <span> Madame </span> : gender == "Homme" ? <span> Monsieur </span> : <></>}
                        {name}
                    </h2>
                </div>
            </div>
        </>
    );

};

export default Home;
