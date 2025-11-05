import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import { RouterProvider } from "react-router";
import './App.css'
import { router } from './providers/router/routes'

function App() {


  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
