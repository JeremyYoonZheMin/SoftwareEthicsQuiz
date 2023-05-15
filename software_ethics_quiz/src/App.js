import './App.css';
import Landing from "./pages/landing";
import Terms from "./pages/terms";
import SummaryAndFeedback from "./pages/summaryAndFeedback";
import Questions from '../src/pages/questions';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path='' exact element={<Landing/>}/>
                    <Route path='/terms' exact element={<Terms/>}/>
                    <Route path='/questions' exact element={<Questions/>}/>
                    <Route path='/summary' exact element={<SummaryAndFeedback/>}/>
                </Routes>
            </Router>
        </main>
    );
}

export default App;
