import { useState } from "react";

import Dropdown from "./components/Dropdown";
import DropdownList from "./components/DropdownList";

function App() {
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

  return (
    <div className="App">
      <div className="wrapper">
        <Dropdown title="Select Book" items={items} multiSelect={true} />
        <DropdownList />
      </div>
    </div>
  );
}

export default App;
