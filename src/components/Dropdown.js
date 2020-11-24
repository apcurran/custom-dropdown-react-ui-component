import React, { useState } from 'react';

function Dropdown({ title, items = [], multiSelect = false }) {
    const [open, setOpen] = useState(false);
    const [selections, setSelections] = useState([]);

    function handleClick(item) {
        const myItem = selections.some(currentItem => currentItem.id === item.id);

        if (!myItem) {
            if (!multiSelect) {
                setSelections([item]);
            } else if (multiSelect) {
                setSelections([...selections, item]);
            }
        } else {
            // Remove item that is already selected
            const updatedSelectionsArr = selections.filter(selection => selection.id !== item.id);

            setSelections([...updatedSelectionsArr]);
        }
    }

    function toggleDropdown() {
        setOpen(!open);
    }

    function isItemInSelections(item) {
        const isPresent = selections.find(selection => selection.id === item.id);

        if (isPresent) return true;

        return false;
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
            {open ? (
                <ul className="dropdown-list">
                    {items.map(item => (
                        <li onClick={() => handleClick(item)} key={item.id} className="dropdown-list__item">
                            <span>{item.value}</span>
                            <span>{isItemInSelections(item) && "Selected"}</span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Dropdown;
