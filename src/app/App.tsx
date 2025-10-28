import { ThemeProvider } from '../shared/lib/theme/ThemeProvider'
import MainLayout from '../shared/MainLayout'
import './App.css'

function App() {


  return (
    <ThemeProvider>
      <MainLayout />
    </ThemeProvider>
  )
}

export default App
