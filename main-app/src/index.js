import React from 'react'
import ReactDOM from 'react-dom'
import { Link, BrowserRouter } from 'react-router-dom'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'default-app',
    entry: { scripts: ['/7002/main.js'] },
    container: '#default-app',
    activeRule: location => true,
  },
]);
start()

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <h3 style={{ display: 'inline-block' }}>Main App</h3>
        </header>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('header'))
