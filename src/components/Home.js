import React, {useContext, useState} from 'react';
import NameContext from "../Hooks/NameContext";
import { useHistory } from "react-router-dom";

export const Home = () => {

    const {name, setName} = useContext(NameContext);
    const [lastname, setLastname] = useState("");
    const [firstname, setFirstname] = useState("");

    const [error, setError] = useState("");

    const history = useHistory();

    const routeChange = () =>{
        let path = `/gender`;
        if (firstname === "" || lastname ==""){
            setError("inserer votre nom et prenom s'il vous plait!");
            return
        }
        // get fullname
        const fullname = firstname +" "+ lastname;
        setName(fullname);
        // Link to gender page
        history.push(path);
    }


    return (
        <>
            <div className="row d-flex justify-content-center align-self-center div-center">
                <h2>
                    Peux tu indiquer l'identité du
                    patient
                </h2>
            </div>
            <div className="row col-lg-12" >
                <div className="  col-lg-2 pt-lg-5 ">

                </div>
                <input type="text col-lg-4 div-round"
                       value={firstname} required
                       onChange={e => setFirstname(e.target.value)}
                       placeholder="Nom"/>

                <div className=" col-lg-2 ">
                </div>
                <input type="text col-lg-4 div-round"
                       value={lastname} required
                       onChange={e => setLastname(e.target.value)}
                       placeholder="Prenom"/>


            </div>
            {error != "" ? <div className="row d-flex justify-content-center align-self-center ">
                <span className="text-danger">
                    Peux tu indiquer l'identité du
                    patient
                </span>
            </div>:<></>}
            <div className="row col-lg-12 mt-5 " >
                <button  className="btn bg-transparent  mx-auto d-block btn-click"
                         onClick={routeChange}>
                    <i className="fa fa-long-arrow-right  col-6   icon-arrow" style={{fontSize: "60px"}}></i>
                </button>
            </div>
        </>
    );

};

export default Home;
