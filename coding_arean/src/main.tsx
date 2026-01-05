import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store/store.ts'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
    </Provider>
  </BrowserRouter>,
)
