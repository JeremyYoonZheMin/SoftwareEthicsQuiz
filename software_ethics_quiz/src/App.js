import logo from './logo.svg';
import './App.css';
import Questions from '../src/pages/questions';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <main className="App">
      <Router>
          <Routes>
            <Route path='/questions' exact element={<Questions/>} />
          </Routes>
        </Router>
    </main>
  );
}

export default App;
