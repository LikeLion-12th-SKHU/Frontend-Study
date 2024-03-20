import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode에서는 컴포넌트 함수들이 두 번 실행됨.
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
