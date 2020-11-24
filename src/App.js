import Dropdown from "./components/Dropdown";

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
      <Dropdown title="Select Book" items={items} multiSelect={true} />
    </div>
  );
}

export default App;
