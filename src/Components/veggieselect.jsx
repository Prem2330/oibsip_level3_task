import React, { useState } from "react";
import Select from "react-select";

export default function App1() {
  
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: "Tomato", label: "Tomato" },
    { value: "Jalepeno", label: "Jalepeno" },
    { value: "bell peppers", label: "bell peppers" },
    { value: "corn", label: "corn" },
    { value: "broccoli", label: "broccoli" },
    { value: "Baby Spinach", label: "Baby Spinach" }
  ];

  // Function triggered on selection
  function handleSelect(data) {
    setSelectedOptions(data);
  }
  return (
    <div className="app">
      <div className="dropdown-container">
        <Select
          options={optionList}
          placeholder="Select Veggies"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          isMulti
         
        />
      </div>
    </div>
  );
}
