import { useCommonContext } from "@/contexts/common";
import { useRef, useState } from "react";

const Image = () => {
  const ogWidth = 1700;
  const ogHeight = 2200;
  const imageRef = useRef<HTMLImageElement>(null);

  const [width, setWidth] = useState(ogWidth);
  const [height, setHeight] = useState(ogHeight);

  const handleLoad = () => {
    if (imageRef?.current) {
      const { width: w, height: h } = imageRef.current.getBoundingClientRect();
      setWidth(w);
      setHeight(h);
      imageRef?.current?.addEventListener("onload", () => {
        console.log("loaded");
      });
    }
  };

  const { selectedSection } = useCommonContext();

  const { position } = selectedSection || {};

  const ratio = width / ogWidth;

  return (
    <>
      <div className="outer-image-container">
        <div className="image-container">
          {position && (
            <BoundingBox
              left={position[0] * ratio}
              top={position[1] * ratio}
              width={(position[2] - position[0]) * ratio}
              height={(position[3] - position[1]) * ratio}
            />
          )}
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
            height: 100vh;
            position: relative;
          }
          .image-container {
            margin: auto;
            width: fit-content;
            height: 100vh;
            display: flex;
            flex-direction: row;
            position: relative;
          }
          img {
            position: relative;
            // margin: auto;
            height: 100vh;
            object-fit: contain;
          }
        `}
      </style>
    </>
  );
};

export default Image;

type BoundingBoxPropsType = {
  top: number;
  left: number;
  width: number;
  height: number;
};

const BoundingBox = ({ top, left, width, height }: BoundingBoxPropsType) => {
  console.log("bb render", top, left, width, height);
  return (
    <>
      <div
        className="bounding-box"
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <style jsx>
        {`
          .bounding-box {
            z-index: 10;
            position: absolute;
            width: 100px;
            height: 20px;
            background: #00f5;
          }
        `}
      </style>
    </>
  );
};
