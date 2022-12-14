import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div style={{ backgroundColor: "var(--color-gray-50)" }}>
        TEST DIV WITH BACKGROUND COLOR
      </div>
    </div>
  );
}

export default App;
