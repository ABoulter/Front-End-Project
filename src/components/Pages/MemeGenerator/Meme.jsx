import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useClipboard } from "use-clipboard-copy";

export default function Meme() {
  const [copied, setCopied] = useState(false);
  const clipboard = useClipboard();
  const navigate = useNavigate();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };
  return (
    <div className="generatedContainer">
      <h1>
        <img src="/images/memeResultado.png" />
      </h1>
      <button onClick={() => navigate("/memegenerator")} className="voltarMeme">
        Fazer mais Memes!
      </button>

      {url && <img src={url} alt="" className="memeResultado" />}
      <button onClick={copyLink} className="clipboardBtn">
        {copied ? "Link Copiado" : "Partilhar!"}
      </button>
    </div>
  );
}
