import { useEffect } from "react";
import { useState } from "react";
import { CirclePicker } from "react-color";
import DrawingPanel from "./Painel";

export default function Editor() {
  const [panelWidth, setPanelWidth] = useState(16);
  const [panelHeight, setPanelHeight] = useState(16);
  const [hideOptions, setHideOptions] = useState(false);
  const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
  const [buttonText, setButtonText] = useState("desenhar");
  const [selectedColor, setColor] = useState("#f44336");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function initializeDrawingPanel() {
    setHideOptions(!hideOptions);
    setHideDrawingPanel(!hideDrawingPanel);

    buttonText === "desenhar"
      ? setButtonText("limpar")
      : setButtonText("desenhar");
  }

  function changeColor(color) {
    setColor(color.hex);
  }

  return (
    <div id="editor">
      <h1>
        <img src="/images/fazatuaobratitle.png" alt="Faz a tua obra!" />
      </h1>
      {hideDrawingPanel && (
        <h2>
          <img src="/images/size1.gif" alt="Coloca o tamanho da tua tela!" />
        </h2>
      )}
      {hideDrawingPanel && (
        <div id="options">
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelWidth}
              onChange={(e) => {
                setPanelWidth(e.target.value);
              }}
              Aria-label="Largura"
            />
            <span>Largura</span>
          </div>
          <div className="option">
            <input
              type="number"
              className="panelInput"
              defaultValue={panelHeight}
              onChange={(e) => {
                setPanelHeight(e.target.value);
              }}
              aria-label="Altura"
            />
            <span>Altura</span>
          </div>
        </div>
      )}
      <button onClick={initializeDrawingPanel} className="button">
        {buttonText}
      </button>
      {hideOptions && (
        <CirclePicker color={selectedColor} onChangeComplete={changeColor} />
      )}
      {hideOptions && (
        <DrawingPanel
          width={panelWidth}
          height={panelHeight}
          selectedColor={selectedColor}
        />
      )}
    </div>
  );
}
