import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";

export default function DropdownScroll({
  data,
  heading,
  placeholder,
  sendDataToParent,
}) {
  const [selectedItem, setSelectedItem] = useState(null);
  const items =
    data &&
    Array.from(data).map((row, i) => {
      return { label: `${row[heading]}`, value: i };
    });

  const setData = (e) => {
    const selectedData = items[e.value].label;
    sendDataToParent(selectedData);
  };



  return (
    <div className="card flex justify-content-center pt-3 pb-4">
      <Dropdown
        value={selectedItem}
        onChange={(e) => {
          setData(e);
          setSelectedItem(e.value);
        }}
        options={items}
        virtualScrollerOptions={{ itemSize: 38 }}
        placeholder={placeholder}
        className="w-full md:w-14rem h-3rem mr-3"
      />
    </div>
  );
}
