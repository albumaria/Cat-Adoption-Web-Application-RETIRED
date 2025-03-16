import "./InputField.css"
import React from "react";

const InputField = ( { placeHolder, value, onChange } ) => {
    return (
        <input className="input-bar"
               type="text"
               placeholder={placeHolder}
               value={value}
               onChange={onChange}
        >
        </input>
    );

};

export default InputField;