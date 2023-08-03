import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";
import StartPage from "./components/StartPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
