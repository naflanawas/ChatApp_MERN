//  import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//</React.StrictMode>,this doesnt play very well with websockets(needed for chatapps)
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
