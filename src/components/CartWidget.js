import React from "react";
import { useState } from "react";
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function CartWidget() { 
    const [counter, setCounter] = useState(0)
    const clickHandler = () => {
        setCounter(counter + 1)
    }
    return (
       <>
       <div className="d-flex">
        {counter}
       </div>
        <button className="btn btn-primary" onClick={clickHandler}>
                    <FontAwesomeIcon icon={faCartShopping} />
        </button>
       </>

    );
}