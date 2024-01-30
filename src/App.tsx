import { useState } from "react";
import Image from "./components/image";
import Sections from "./components/sections";
import { CommonContextProvider } from "./contexts/common";
import ThemeButton from "./components/themeButton";

function App() {
  const [isDarkMode, toggleMode] = useState<boolean>(true);

  return (
    <>
      <CommonContextProvider>
        <div className={`container ${isDarkMode ? "dark" : ""}`}>
          <ThemeButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
          <div className="left">
            <Sections />
          </div>
          <div className="right">
            <Image />
          </div>
        </div>
      </CommonContextProvider>

      {/* Minimal Color System for light/dark mode */}
      <style jsx global>
        {`
          :root {
            --blue: #00f;
            --blue-alt: #00f5;
            --tx: #000;
            --tx-alt: #000a;
            --bg: #fff;
            --bg-alt: #ddd;
            --red: #f00;
          }

          .dark {
            --blue: #00f;
            --blue-alt: #00f5;
            --tx: #fff;
            --tx-alt: #fffa;
            --bg: #000;
            --bg-alt: #222;
            --red: #f00;
          }
        `}
      </style>

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
            background: var(--bg);
          }
          .left {
            width: 400px;
            max-width: 400px;
            height: 100vh;
            overflow-y: scroll;
            border-right: 1px solid var(--bg-alt);
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
