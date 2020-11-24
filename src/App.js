import { useState } from "react";

import Dropdown from "./components/Dropdown";
import DropdownList from "./components/DropdownList";

function App() {
  const [open, setOpen] = useState(false);
  const [selections, setSelections] = useState([]);
  const multiSelect = true;

  const items = [
    {
      id: 1,
      value: "A Tale of Two Cities"
    },
    {
      id: 2,
      value: "Great Expectations"
    },
    {
      id: 3,
      value: "The Importance of Being Earnest"
    }
  ];

  function toggleDropdown() {
    setOpen(!open);
  }

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

  function isItemInSelections(item) {
    const isPresent = selections.find(selection => selection.id === item.id);
    const showOrHideClass = isPresent ? "check-icon" : "check-icon--hide check-icon";

    return (
        <svg className={showOrHideClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
    );
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Dropdown title="Select Book" open={open} toggleDropdown={toggleDropdown} />
        {open ? (
          <DropdownList items={items} handleClick={handleClick} isItemInSelections={isItemInSelections} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
