import React from "./node_modules/react";

export const Filter = ({value, handleChange}) => {
    return (
        <div>
            filter: <input value={value} onChange={hangleChange} />
        </div>
    )
}