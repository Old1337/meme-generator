import React from "react";

import TrollImg from "../images/Troll Face.png";

export default function Header() {
  return (
    <header className="bg-dark p-4 d-flex align-items-center">
      <img src={TrollImg} width="50px" alt="" />
      <h1 className="text-white fw-bold ms-3 fs-3">Meme Generator</h1>
      <h2 className="text-white fw-bold ms-auto fs-4">
        React Course - Project 3
      </h2>
    </header>
  );
}
