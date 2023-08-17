import './App.css';
import Landing from "./pages/landing";
import Terms from "./pages/terms";
import SummaryAndFeedback from "./pages/summaryAndFeedback";
import Questions from '../src/pages/questions';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from "react";
import { scenariosAndQuestions } from './constants/scenariosAndQuestions';

function App() {

    const [selectedAnswers, setSelectedAnswers] = useState(null);

    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path='' exact element={<Landing />} />
                    <Route path='/terms' exact element={<Terms />} />
                    <Route path='/questions' exact element={<Questions setFinalSelectedAnswers={setSelectedAnswers}/>}/>

                    <Route
                        exact
                        path="/summary"
                        element={selectedAnswers ? <SummaryAndFeedback selectedAnswers={selectedAnswers}/> : <Navigate replace to={"/"} />}
                    />
                    {/* <Route path='/summary' exact element={<SummaryAndFeedback />} /> */}
                </Routes>
            </Router>
        </main>
    );
}

export default App;
