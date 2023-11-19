import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import NotFound from "./components/usd/NotFound";
import MyFooter from "./components/MyFooter";
import BookDetails from "./components/BookDetails";
import WorkInProgress from "./components/usd/WorkInProgress";
import { useEffect, useState } from "react";
import ThemeContext from "./context/theme";
import SearchContext from "./context/search";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [inputText, setInputText] = useState("");
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SearchContext.Provider value={{ inputText, setInputText }}>
        <div className={`${theme}`}>
          <BrowserRouter>
            <MyNav />
            <Welcome />
            <Routes>
              <Route path="/" element={<AllTheBooks />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/book/:asin" element={<BookDetails />} />
              <Route path="/wip" element={<WorkInProgress />} />
            </Routes>
            <MyFooter />
          </BrowserRouter>
        </div>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
