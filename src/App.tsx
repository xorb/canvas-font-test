import { fabric } from "fabric";
import { useEffect, useState } from "react";
import useCanvasContext from "./hooks/useCanvasContext";

export const editorFonts = [
  {
    name: "LibreFranklin",
    url: "https://d3q7mfli5umxdg.cloudfront.net/LibreFranklin[wght].ttf",
    options: { style: "normal", weight: 300 },
  },
];

function App() {
  const [loaded, setLoaded] = useState(false);

  const { setCanvas, canvas } = useCanvasContext();
  useEffect(() => {
    const canvas = new fabric.Canvas("canvas", {
      width: 1600,
      height: 800,
      backgroundColor: "#ffffff",
    });
    setCanvas(canvas);
  }, []);

  useEffect(() => {
    loadFonts();
    setTimeout(() => {
      setLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (canvas && loaded) {
      const text0 = new fabric.Textbox("Hello world", {
        fontSize: 54,
        width: 400,
      });
      const text1 = new fabric.Textbox("LibreFranklin100", {
        fontSize: 54,
        top: 60,
        fontWeight: 100,
        fontFamily: "LibreFranklin",
      });
      const text2 = new fabric.Textbox("LibreFranklin200", {
        fontSize: 54,
        top: 120,
        fontWeight: 200,
        fontFamily: "LibreFranklin",
      });
      const text3 = new fabric.Textbox("LibreFranklin300", {
        fontSize: 54,
        top: 180,
        fontWeight: 300,
        fontFamily: "LibreFranklin",
      });
      const text4 = new fabric.Textbox("LibreFranklin400", {
        fontSize: 54,
        top: 240,
        fontWeight: 400,
        fontFamily: "LibreFranklin",
      });
      const text5 = new fabric.Textbox("LibreFranklin500", {
        fontSize: 54,
        top: 300,
        fontWeight: 500,
        fontFamily: "LibreFranklin",
      });
      const text6 = new fabric.Textbox("LibreFranklin600", {
        fontSize: 54,
        top: 360,
        fontWeight: 600,
        fontFamily: "LibreFranklin",
      });
      const text7 = new fabric.Textbox("LibreFranklin700", {
        fontSize: 54,
        top: 420,
        fontWeight: 700,
        fontStyle: "italic",
        fontFamily: "LibreFranklin",
      });
      const text77 = new fabric.Textbox("LibreFranklin700", {
        fontSize: 54,
        top: 480,
        fontWeight: 700,
        fontFamily: "LibreFranklin",
      });
      canvas.add(
        text0,
        text1,
        text2,
        text3,
        text4,
        text5,
        text6,
        text7,
        text77
      );
    }
  }, [canvas && loaded]);

  const loadFonts = () => {
    const promisesList = editorFonts.map((font) => {
      // @ts-ignore
      return new FontFace(font.name, `url(${font.url})`, font.options)
        .load()
        .catch((err) => err);
    });
    Promise.all(promisesList)
      .then((res) => {
        res.forEach((uniqueFont) => {
          if (uniqueFont && uniqueFont.family) {
            console.log(uniqueFont);
            document.fonts.add(uniqueFont);
            console.log("ADDED FONT");
          }
        });
      })
      .catch((err) => console.log({ err }));
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ecf0f1",
      }}
    >
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
