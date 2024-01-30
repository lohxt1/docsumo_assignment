import { useEffect, useRef, useState } from "react";
import Boxes from "./boxes";

const Image = () => {
  // the original image width from which the sections data were calculated (from assets folder)
  // this value is necessary to calculate the amount by which the bounding box dimensions must be scaled.
  const ogWidth = 1700;
  const imageRef = useRef<HTMLImageElement>(null);

  const [width, setWidth] = useState(ogWidth);

  // event listener for when the image is done loading on the DOM.
  // Get the iamge width on load
  const handleLoad = () => {
    if (imageRef?.current) {
      const { width: w } = imageRef.current.getBoundingClientRect();
      setWidth(w);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleLoad);
    return () => {
      window.removeEventListener("resize", handleLoad);
    };
  }, []);

  return (
    <>
      <div className="outer-image-container">
        <div className="image-container">
          {width && imageRef?.current && <Boxes imageWidth={width} />}
          <img
            onLoad={handleLoad}
            ref={imageRef}
            src={`../a2cbec1124234a6d846f908ba9531a2e-1.jpg`}
          />
        </div>
      </div>
      <style jsx>
        {`
          .outer-image-container {
            width: calc(100% - 400px);
            height: calc(100vh - 40px);
            position: relative;
          }
          .image-container {
            margin: auto;
            width: fit-content;
            height: calc(100vh - 40px);
            display: flex;
            flex-direction: row;
            position: relative;
          }
          img {
            position: relative;
            // margin: auto;
            height: calc(calc(100vh - 40px) - 2px);
            object-fit: contain;
            border: 1px solid var(--bg-alt);
          }
        `}
      </style>
    </>
  );
};

export default Image;
