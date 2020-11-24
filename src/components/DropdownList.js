import React from 'react';
import DropdownListItem from "./DropdownListItem";

function DropdownList({ items, handleClick, isItemInSelections }) {
    return (
        <ul className="dropdown-list">
            {items.map(item => (
                <DropdownListItem item={item} handleClick={handleClick} key={item.id} isItemInSelections={isItemInSelections} />
            ))}
        </ul>
    );
}

export default DropdownList;
