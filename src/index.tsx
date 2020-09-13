import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <div className="p-3">
    <React.StrictMode>
      <App letters="TVIRUAL" />
    </React.StrictMode>
  </div>,
  document.getElementById('root')
)
