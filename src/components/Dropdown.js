function Dropdown({ title, open, toggleDropdown }) {
    return (
        <div
            onClick={toggleDropdown}
            className="dropdown-container"
        >
            <h2 className="dropdown__title">{title}</h2>
            <button className="dropdown__toggle-btn">{open ? "Close" : "Open"}</button>
        </div>
    );
}

export default Dropdown;
