import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Characters, Landing } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/characters" element={<Characters />} />
      </Routes>
    </div>
  )
}

export default App
