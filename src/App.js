import "./App.css";
import Header from "./components/Header";
import NotePage from "./pages/NotePage";
import NotesListPage from "./pages/NotesListPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<NotesListPage />} />
            <Route path="/notes/:id" element={<NotePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
