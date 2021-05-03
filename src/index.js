import React from "react"
import ReactDOM from "react-dom"

import "./styles.css"

function App() {
  return (
    <div className="App">
      <h1>Prototyping with React+Framer</h1>
      <img src="/yay.gif"></img>
      <h2>Find out the answer for this: {1245 * 37343 - 223535 / 152}</h2>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
