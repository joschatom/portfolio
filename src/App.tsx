import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>     
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
          <select id='lang-select'>
            <option>English</option>
            <option>German</option>
          </select>
      <a id='src-link' href="http://example.com">Source code of this site</a>
    </>
  )
}

export default App
