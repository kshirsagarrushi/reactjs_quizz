import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";
import FinalResult from "./components/FinalResult";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/result" element={<FinalResult/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
