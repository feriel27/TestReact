import React from 'react';
import '../../App.css';
import {Button, Image, } from "react-bootstrap";

export const NavigationBar = () => (

    <div className="row grow col-lg-12 responsive-navbar-nav borderBottom">

        <div className="col-lg-2 borderLeft ">
            <Image className="card-img border-dark " src={require("../../logoGoogle.png")}
                   alt={"logoGoogle"}/>
        </div>
        <div className=" col-lg-10 d-flex justify-content-lg-end mt-4 pl-3">
            <Button className="btn-nav" variant="link" style={{backgroundColor:"#dce1eb"}}>
                <label className="col-6 ">Mon compte</label>
                <i className="fa fa-long-arrow-down col-6  pl-lg-5 " style={{fontSize: "30px"}}></i>
            </Button>

        </div>
    </div>
    )
;

export default NavigationBar;
