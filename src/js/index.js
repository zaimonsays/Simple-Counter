//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { checkPropTypes } from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

const SecondsCounter = (props) => {
    SecondsCounter.propTypes = {
        digitFour: checkPropTypes.number,
        digitThree: checkPropTypes.number,
        digitTwo: checkPropTypes.number,
        digitOne: checkPropTypes.number,
    }

    return (
        <div className="contCounter">
            <div className="clockIcon"><FontAwesomeIcon icon={faClock} /></div>
            <div className="four">{props.digitFour % 10}</div>
            <div className="three">{props.digitThree % 10}</div>
            <div className="two">{props.digitTwo % 10}</div>
            <div className="one">{props.digitOne % 10}</div>
        </div>
    );
};

let counter = 0;
setInterval (function(){
    const four = Math.floor(counter/1000);
    const three = Math.floor(counter/100);
    const two = Math.floor(counter/10);
    const one = Math.floor(counter/1);
    console.log (four, three, two, one)
    counter++;
    ReactDOM.render(
    <SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four}/>, 
    document.querySelector("#app")
    );
},1000)
//render your react application
