import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { worker } from './mocks/browser'

// msw server 돌리기 위한 코드
if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
