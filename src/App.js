import React, {useMemo, useState} from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import About from './components/About';
import {NoMatch} from './components/NoMatch';
import Contact from "./components/Contact";
import 'font-awesome/css/font-awesome.min.css';
import Help from "./components/Help";
import NavigationBar from "./components/Layout/NavigationBar";
import NameContext from './Hooks/NameContext';
import SideBar from "./components/Layout/SideBar";
import Gender from "./components/Gender";
import GenderContext from "./Hooks/GenderContext";
import Result from "./components/Result";


function App() {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");


    return (
        <React.Fragment>

            {/*navbar*/}
            <NavigationBar/>
            {/*end navbar*/}
            <div className="row  col-lg-12 ">
                <Router>
                    {/*sidebar*/}
                    <SideBar/>
                    {/*end side bar*/}
                    <div className="main col-lg-10  py-3">
                        <Switch>
                            <NameContext.Provider value={{name, setName}}>
                                <Route exact path="/contact" component={Contact}/>
                                <Route exact path="/aide" component={Help}/>
                                <GenderContext.Provider value={{gender, setGender}}>
                                    <Route exact path="/" component={Home}/>
                                    <Route exact path="/gender" component={Gender}/>
                                    <Route exact path="/result" component={Result}/>
                                </GenderContext.Provider>
                                <Route path="/about" component={About}/>
                            </NameContext.Provider>

                            <Route component={NoMatch}/>
                        </Switch>

                    </div>
                </Router>
            </div>
            {/*<div className="row  col-lg-12 ">*/}
            {/*    <div className="col-lg-2 bg-info py-3 flex-column borderLeftFooter">*/}
            {/*        <div className="" style={{backgroundColor: "yellow"}}>*/}
            {/*            <a href="/" className="list-group-item  "> <label className="text-bar">Home</label></a>*/}
            {/*            <a href="/about" className="list-group-item last "><label className="text-bar">About</label></a>*/}
            {/*        </div>*/}
            {/*        /!*<div className="  divfooter" style={{backgroundColor:"green"}}>*!/*/}
            {/*        /!*    <a href="/page1" className="list-group-item">PAge</a>*!/*/}
            {/*        /!*    <a href="/page1" className="list-group-item ">PAge</a>*!/*/}
            {/*        /!*</div>*!/*/}

            {/*    </div>*/}

            {/*</div>*/}

        </React.Fragment>
    );
}

export default App;
