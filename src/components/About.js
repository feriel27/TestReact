import React, {useContext} from 'react';
import NameContext from "../Hooks/NameContext";


const About = () => {


    const {name, setName} = useContext(NameContext);
    return (
        <>
            <h1>hello from About</h1>
            <h1>{name}</h1>
        </>
    );

};

export default About;
