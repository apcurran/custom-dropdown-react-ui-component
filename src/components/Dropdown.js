import React, { useState } from 'react';

function Dropdown({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selections, setSelections] = useState([]);

    function handleClick(item) {

    }

    function toggleDropdown() {
        setOpen(!open);
    }

    return (
        <div className="wrapper">
            <div
                onClick={toggleDropdown}
                className="dropdown-container"
            >
                <h2 className="dropdown__title">{title}</h2>
                <button className="dropdown__toggle-btn">{open ? "Close" : "Open"}</button>
            </div>

        </div>
    );
}

export default Dropdown;
