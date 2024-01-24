import Image from "./components/image";
import Sections from "./components/sections";
import { CommonContextProvider } from "./contexts/common";

function App() {
  return (
    <>
      <CommonContextProvider>
        <div className="container">
          <div className="left">
            <Sections />
          </div>
          <div className="right">
            <Image />
          </div>
        </div>
      </CommonContextProvider>
      <style jsx>
        {`
          body {
            margin: 0px;
            padding: 0px;
          }
          .container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: row;
            background: #000;
          }
          .left {
            width: 400px;
            max-width: 400px;
            height: 100vh;
            border-right: 1px solid #fff5;
          }
          .right {
            width: calc(100vw - 500px);
            height: 100vh;
          }
        `}
      </style>
    </>
  );
}

export default App;

// left side
// ~ sections.json list

// right side
// ~ image
// ~ sections.json list

// global state
// ~ selected section
