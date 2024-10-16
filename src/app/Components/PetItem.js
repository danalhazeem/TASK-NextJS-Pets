"use client";

import { useState } from "react";
import Image from "next/image";
import Pets from "./PetsList";

const btnStyle =
  "m-4 p-2 bg-palette-primary text-white rounded-sm font-primary font-semibold  hover:bg-palette-dark";

function PetItem({ pet }) {
  let [image, setImage] = useState(pet.image);
  const [adopt, setAdopt] = useState(false);

  function currentImage() {
    setImage(image === pet.image ? pet.image2 : pet.image);
  }

  //<============= Adoption ================>

  function handelAdopt() {
    if (confirm("do you want to adopt")) {
      setAdopt(true);
      ("you pressed Adopt");
    } else {
      setAdopt(false);
      ("you pressed cancel");
    }
  }
  if (adopt) return null;

  return (
    <div className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
      <div className="h-72 border-b-2 border-palette-lighter relative">
        <Image
          alt={pet.name}
          src={image}
          className="transform duration-500 ease-in-out hover:brightness-75"
          fill
          sizes="30vw"
        />
      </div>
      <div className="h-48 relative">
        <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
          {pet.name}
        </div>
        <div className="text-lg text-gray-600 p-4 font-primary font-light">
          {pet.description}
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={currentImage} type="button" className={btnStyle}>
            Pet
          </button>
          <button type="button" className={btnStyle} onClick={handelAdopt}>
            Adopt
          </button>
        </div>
      </div>
    </div>
  );
}

export default PetItem;
