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
        <main className={`${isDarkMode ? "dark" : ""}`}>
          <nav>
            <div>Docsumo Assignment</div>
            <ThemeButton isDarkMode={isDarkMode} toggleMode={toggleMode} />
          </nav>
          <div className="container">
            <div className="left">
              <Sections />
            </div>
            <div className="right">
              <Image />
            </div>
          </div>
        </main>
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
          nav {
            display: flex;
            flex-direction: row;
            top: 0px;
            left: 0px;
            width: calc(100vw - 20px);
            height: 19px;
            background: var(--bg);
            color: var(--tx);
            font-family: courier new;
            padding: 10px;
            border-bottom: 1px solid var(--bg-alt);
          }
          .container {
            width: 100vw;
            height: calc(100vh - 40px);
            display: flex;
            flex-direction: row;
            background: var(--bg);
          }
          .left {
            width: 400px;
            max-width: 400px;
            height: calc(100vh - 40px);
            overflow-y: scroll;
            border-right: 1px solid var(--bg-alt);
          }
          .right {
            width: calc(100vw - 500px);
            height: calc(100vh - 40px);
          }
        `}
      </style>
    </>
  );
}

export default App;
