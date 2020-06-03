import React from 'react'
import "../../App.css";
import { Link} from "react-router-dom";


const SideBar = (props) => {


    return (
        <React.Fragment>

            <div className="col-lg-2   borderLeft">
                <div className=" pb-lg-4 pt-lg-4" style={{width: '100%'}}>

                        <Link to={"/"} className="list-group-item  active">
                            <label className="text-bar">1er visite</label>
                        </Link>

                        <Link to={"/about"} className="list-group-item  "> <label
                            className="text-bar">About</label></Link>


                        <Link to={"/contact"} className="list-group-item  ">
                            <label
                            className="text-bar">Contact</label></Link>


                        <Link to={"/aide"} className="list-group-item "> <label
                            className="text-bar">Aide</label></Link>


                        <hr className="col-lg-12"/>

                        <Link to={"/contact"} className="list-group-item "> <label
                            className="text-bar">Contact</label></Link>


                        <Link to={"/about"} className="list-group-item "> <label
                            className="text-bar">About</label></Link>



                </div>

            </div>
        </React.Fragment>
    );
};

export default SideBar;
