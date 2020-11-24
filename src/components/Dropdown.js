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
        const showOrHideClass = isPresent ? "check-icon" : "check-icon--hide check-icon";

        return (
            <svg className={showOrHideClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        );
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
                            <span className="dropdown-list__item__value">{item.value}</span>
                            <span className="dropdown-list__item__selected-status">{isItemInSelections(item)}</span>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Dropdown;
