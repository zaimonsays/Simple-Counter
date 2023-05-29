import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { checkPropTypes } from "prop-types";

export const SecondsCounter = (props) => {
    SecondsCounter.propTypes = {
        digitFour: checkPropTypes.number,
        digitThree: checkPropTypes.number,
        digitTwo: checkPropTypes.number,
        digitOne: checkPropTypes.number,
    }

    let counter = 0;
    setInterval (function(){
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);
        console.log(four, three, two, one);
        counter++;
    },1000)
    

    return (
        <div className="contCounter">
            <div className="clockIcon"><FontAwesomeIcon icon={faClock} /></div>
            <div className="four">{props.digitFour}</div>
            <div className="three">{props.digitThree}</div>
            <div className="two">{props.digitTwo}</div>
            <div className="one">{props.digitOne}</div>
        </div>
    );
};