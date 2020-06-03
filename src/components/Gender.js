import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {useHistory} from "react-router-dom";
import SideBar from "./Layout/SideBar";
import NameContext from "../Hooks/NameContext";
import {Button} from "react-bootstrap";
import GenderContext from "../Hooks/GenderContext";


export const Gender = () => {
    const {name, setName} = useContext(NameContext);
    const {gender, setGender} = useContext(GenderContext);


    const history = useHistory();

    const routeChange = () => {
        let path = `/result`;
        history.push(path);
    }
    return (
        <>
            <div className="row d-flex justify-content-center align-self-center div-center">
                <h2>
                    Peux tu indiquer son sexe ?
                </h2>

            </div>
            <div className="row col-lg-12">
                <div className="  col-lg-2 pt-lg-5 ">
                    <i className="fa fa-long-arrow-left  col-6  pt-lg-2 "
                       onClick={()=>{
                           let path = `/`;
                           history.push(path);
                       }}
                       style={{fontSize: "60px", color: 'turquoise'}}></i>
                </div>
                <Button className="text col-lg-3 btnP "
                        value={"Femme"}
                        onClick={() => setGender("Femme")}>
                    <h3>Femme</h3>
                </Button>
                <div className=" col-lg-2 ">
                </div>
                <Button className="text col-lg-3 btnP "
                        value={"Homme"}
                        onClick={() => setGender("Homme")}>
                    <h3>Homme</h3>
                </Button>

            </div>

            <div className="row col-lg-12 mt-5 ">
                <button className="btn bg-transparent  mx-auto d-block"
                        onClick={routeChange}>
                    <i className="fa fa-long-arrow-right  col-6   icon-arrow" style={{fontSize: "60px"}}></i>
                </button>
            </div>
        </>
    )
        ;

};

export default Gender;
