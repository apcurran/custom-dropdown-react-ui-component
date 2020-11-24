import React, { useState, useRef, useEffect } from 'react';
import DropdownListItem from "./DropdownListItem";

function DropdownList({ setOpen, items, handleClick, isItemInSelections }) {
    const wrapperRef = useRef(null);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
    }, []);

    function handleClickOutside(event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            setOpen(false);
            setIsVisible(false);
        }
    }

    return (
        isVisible ? (
            <ul ref={wrapperRef} className="dropdown-list">
                {items.map(item => (
                    <DropdownListItem item={item} handleClick={handleClick} key={item.id} isItemInSelections={isItemInSelections} />
                ))}
            </ul>
        ) : null
    );
}

export default DropdownList;
