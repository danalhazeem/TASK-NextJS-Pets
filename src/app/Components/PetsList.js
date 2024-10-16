"use client";
import pets from "../data/pets";
import { useState } from "react";
import PetItem from "./PetItem";

function PetsList() {
  let [query, setQuery] = useState("");
  let [type, setType] = useState("");

  const filterBySelection = pets.filter(
    (pet) =>
      pet.name.toLowerCase().includes(query.toLowerCase()) &&
      (pet.type === type || type === "")
  );

  const petList = filterBySelection.map((pet) => (
    <PetItem pet={pet} key={pet.id} />
  ));
  function searchBar(event) {
    setQuery(event.target.value);
    //console.log(query);
  }
  function searchType(event) {
    setType(event.target.value);
    //console.log(type);
  }
  return (
    <>
      <div className="mx-auto">
        <div className="flex justify-start space-x-2 w-full font-primary">
          <div className="flex flex-col items-start space-y-1 flex-grow">
            <input
              onChange={(event) => searchBar(event)}
              type="search"
              placeholder="search"
              className="text-gray-900 form-input border border-gray-300 w-full rounded-sm focus:border-palette-light focus:ring-palette-light"
            />
          </div>
          <div className="flex flex-col items-start space-y-1 flex-grow-0">
            <select
              onChange={(event) => searchType(event)}
              defaultValue={""}
              className="form-select border border-gray-300 rounded-sm w-full text-gray-900 focus:border-palette-light focus:ring-palette-light"
            >
              <option value="">All</option>
              <option value="Cat">Cat</option>
              <option value="Dog">Dog</option>
              <option value="Rabbit">Rabbit</option>
            </select>
          </div>
        </div>
      </div>
      <div className="py-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
        {petList}
      </div>
    </>
  );
}

export default PetsList;
