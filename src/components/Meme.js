import React from "react";
import { useEffect } from "react";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  useEffect(() => {
    const getMemes = async () => {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const data = await response.json();

      setAllMemes(data.data.memes);
    };
    getMemes();
  }, []);

  function randomImage() {
    const randomUrl = allMemes[Math.floor(Math.random() * allMemes.length)].url;

    setMeme((prevSate) => {
      return {
        ...prevSate,
        image: randomUrl,
      };
    });
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setMeme((prevSate) => ({
      ...prevSate,
      [name]: value,
    }));
  }

  return (
    <main className="container p-5">
      <div className="form d-flex flex-wrap gap-3 justify-content-center">
        <input
          placeholder="top text"
          className="px-2 flex-fill py-3 fs-3 border-secondary rounded"
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          placeholder="bottom text"
          className="px-2  flex-fill fs-3 py-3 border-secondary rounded"
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
        <button
          onClick={randomImage}
          className="w-100 border-0 bg-danger text-white fs-2 fw-bold  p-3  rounded"
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme position-relative w-75 m-auto mt-4 ">
        <img className="w-100 rounded" src={meme.image} alt="" />
        <h2 className="position-absolute text-uppercase top-0 text-white fw-bold start-50 translate-middle-x text-center">
          {meme.topText}
        </h2>
        <h2 className="position-absolute text-uppercase bottom-0 text-white fw-bold start-50 translate-middle-x text-center">
          {meme.bottomText}
        </h2>
      </div>
    </main>
  );
}
