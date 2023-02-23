import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function MemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [memeIndex, setMemeIndex] = useState(0);
  const [captions, setCaptions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const updateCaption = (e, index) => {
    const text = e.target.value || "";
    setCaptions(
      captions.map((caption, i) => {
        if (index === i) {
          return text;
        } else {
          return caption;
        }
      })
    );
  };

  const generateMeme = () => {
    const currentMeme = memes[memeIndex];
    const formData = new FormData();

    formData.append("username", "exofire");
    formData.append("password", "uranoania1");
    formData.append("template_id", currentMeme.id);
    captions.forEach((caption, index) =>
      formData.append(`boxes[${index}][text]`, caption)
    );

    fetch("https://api.imgflip.com/caption_image", {
      method: "POST",
      body: formData,
    }).then((response) => {
      response.json().then((response) => {
        navigate(`/generated/?url=${response.data.url}`);
      });
    });
  };

  const shuffleMemes = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  };

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const memes = response.data.memes;
        shuffleMemes(memes);
        setMemes(memes);
      });
  }, []);

  useEffect(() => {
    if (memes.length) {
      setCaptions(Array(memes[memeIndex].box_count).fill(""));
    }
  }, [memeIndex, memes]);
  return memes.length ? (
    <div className="memeContainer">
      <h1>
        <img src="/images/memeGenerator.png" alt="Meme Generator" />
      </h1>
      <button className="memeGenerate" onClick={generateMeme}>
        Criar
      </button>
      <button className="memeSkip" onClick={() => setMemeIndex(memeIndex + 1)}>
        Skip
      </button>
      {captions.map((caption, index) => (
        <input
          onChange={(e) => updateCaption(e, index)}
          key={index}
          placeholder={` Insere aqui o ${index + 1}º texto `}
        />
      ))}
      <img
        className="memeImage"
        src={memes[memeIndex].url}
        alt={`${memes[memeIndex].name}`}
      />
    </div>
  ) : (
    <></>
  );
}
