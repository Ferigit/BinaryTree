import React, { useState } from "react";
import './index.css';

const InputForm = (props) => {

    const { handleInputOnChange, inputValue, placeholder = "Enter the value" } = props;

    const handleChange = (event) => {
        event.preventDefault();
        handleInputOnChange(event.target.value.toUpperCase())
    };

    return (
        <div className="input-control">
            <input
                className={"input"}
                type={"text"} id="input"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleChange}
            />

        </div >
    );
};

export { InputForm }
