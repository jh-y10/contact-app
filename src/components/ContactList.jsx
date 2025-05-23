import React from "react";
import { useState } from "react";
import usePhoneStore from "../stores/usePhoneStore";


const ContactList = () => {
  const [searchInput, setSearchInput] = useState("");
  const { phoneBook } = usePhoneStore();
  const { addFilter } = usePhoneStore();
  const { filterBook } = usePhoneStore();

  let filterList = [];

  const search = () => {
    if (searchInput === "") {
      return;
    } else {
      filterList = phoneBook.filter(
        (item) => item.name.includes(searchInput) === true
      );
      addFilter(filterList);
    }
  };

  const handleSearch = (value) => {
    setSearchInput(value);
    addFilter(phoneBook);
  };

  return (
    <div>
      <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      <button className="search-button" type="button" onClick={search}>
        검색
      </button>
      <div className="list-area">
        {searchInput === ""
          ? phoneBook.map((item) => (
              <div className="list-item" key={item.id}>
                <p>{item.name}</p>
                <p>{item.phoneNumber}</p>
              </div>
            ))
          : filterBook.map((item) => (
              <div className="list-item" key={item.id}>
                <p>{item.name}</p>
                <p>{item.phoneNumber}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ContactList;
