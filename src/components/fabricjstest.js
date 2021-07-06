import React from "react";
import { fabric } from "fabric";
import { FabricJSCanvas, useFabricJSEditor } from "fabricjs-react";

export default function App() {
  const { selectedObjects, editor, onReady } = useFabricJSEditor();
  const onAddCircle = () => {
    editor.addCircle();
  };
  const onAddRectangle = () => {
    editor.addRectangle();
  };
  const onAddImage = () => {
    fabric.Image.fromURL("my_image.png", function (oImg) {
      editor.canvas.add(oImg);
    });
  };
  return (
    <div className="App">
      <h1>FabricJS React Sample</h1>
      <button onClick={onAddCircle}>Add circle</button>
      <button onClick={onAddRectangle}>Add Rectangle</button>
      <button onClick={onAddImage}>Add Image</button>
      <FabricJSCanvas className="sample-canvas" onReady={onReady} />
    </div>
  );
}