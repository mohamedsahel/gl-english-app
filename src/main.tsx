import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import PlayRoute from './routes/play'
import IndexRoute from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root />}>
          <Route index element={<IndexRoute />} />
          <Route path='play' element={<PlayRoute />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
