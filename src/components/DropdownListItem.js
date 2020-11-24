function DropdownListItem({ item, isItemInSelections, handleClick }) {
    return (
        <li onClick={() => handleClick(item)} className="dropdown-list__item">
            <span className="dropdown-list__item__value">{item.value}</span>
            <span className="dropdown-list__item__selected-status">{isItemInSelections(item)}</span>
        </li>
    );
}

export default DropdownListItem;
